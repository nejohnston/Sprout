-- Calculate the team points.
CREATE OR REPLACE FUNCTION calc_team_score() RETURNS TRIGGER
AS
$$
DECLARE
	num INTEGER;
BEGIN
	FOR num IN 1..3 LOOP
		UPDATE TEAM SET TEAM_POINTS = (
			SELECT SUM(APPLICATION_USER_POINTS)
			FROM APPLICATION_USER
			WHERE TEAM_ID = num)
		WHERE TEAM_ID = num;
	END LOOP;
	RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- When a user is inserted, deleted, or updated, calculate the team points.
CREATE TRIGGER calc_team_points
AFTER INSERT OR UPDATE OR DELETE
ON APPLICATION_USER
FOR EACH ROW
EXECUTE PROCEDURE calc_team_score();

-- Initialize the next alert date.
CREATE OR REPLACE FUNCTION initialize_next_alert()
RETURNS TRIGGER
AS
$$
DECLARE
	calculated_date DATE;
BEGIN
	calculated_date := (
						SELECT USER_SPROUTS_DATE_ADDED 
						FROM USER_SPROUTS 
						WHERE USER_SPROUTS_ID = new.USER_SPROUTS_ID
					   );
	WHILE calculated_date <= current_date LOOP
		calculated_date := calculated_date + new.USER_SPROUTS_WATERING_INTERVALS;
	END LOOP;
	UPDATE USER_SPROUTS 
	SET USER_SPROUTS_NEXT_ALERT_DATE = calculated_date
	WHERE USER_SPROUTS_ID = new.USER_SPROUTS_ID;
	RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- After a user added a sprout, initialize the next alert date.
DROP TRIGGER IF EXISTS initialize_alert ON USER_SPROUTS;

CREATE TRIGGER initialize_alert
AFTER INSERT ON USER_SPROUTS
FOR EACH ROW EXECUTE PROCEDURE initialize_next_alert();

-- Reset the next alert date.
CREATE OR REPLACE FUNCTION reset_next_alert()
RETURNS TRIGGER
AS
$$
DECLARE
BEGIN
	IF (
		SELECT USER_SPROUTS_IS_WATERED 
		FROM USER_SPROUTS
		WHERE USER_SPROUTS_ID = new.USER_SPROUTS_ID
		) = '1' 
		THEN
			UPDATE USER_SPROUTS 
			SET USER_SPROUTS_NEXT_ALERT_DATE = current_date + USER_SPROUTS_WATERING_INTERVALS
			WHERE USER_SPROUTS_IS_WATERED = '1';
			UPDATE USER_SPROUTS
			SET USER_SPROUTS_LAST_WATERED = current_date
			WHERE USER_SPROUTS_IS_WATERED = '1';
	END IF;
	RETURN NULL;
END;
$$ LANGUAGE plpgsql;


-- After a user clicked the water button, reset the next alert date.
DROP TRIGGER IF EXISTS after_plant_watered ON USER_SPROUTS;

CREATE TRIGGER after_plant_watered
AFTER UPDATE OF USER_SPROUTS_IS_WATERED ON USER_SPROUTS
FOR EACH ROW EXECUTE PROCEDURE reset_next_alert();