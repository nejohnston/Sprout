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
DROP TRIGGER IF EXISTS calc_team_points ON APPLICATION_USER;

CREATE TRIGGER calc_team_points
AFTER INSERT OR UPDATE OR DELETE
ON APPLICATION_USER
FOR EACH ROW
EXECUTE PROCEDURE calc_team_score();


-- Initialize the next alert date and add 100 points to a user.
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
	
	UPDATE APPLICATION_USER
	SET APPLICATION_USER_POINTS = APPLICATION_USER_POINTS + 100
	WHERE APPLICATION_USER_ID = new.APPLICATION_USER_ID;
	RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- After a user added a sprout, initialize the next alert date and add 100 points to the user.
DROP TRIGGER IF EXISTS initialize_alert ON USER_SPROUTS;

CREATE TRIGGER initialize_alert
AFTER INSERT ON USER_SPROUTS
FOR EACH ROW EXECUTE PROCEDURE initialize_next_alert();


-- Reset the next alert date and add 10 points to a user.
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
			WHERE USER_SPROUTS_ID = new.USER_SPROUTS_ID;
			
			UPDATE USER_SPROUTS
			SET USER_SPROUTS_LAST_WATERED = current_date
			WHERE USER_SPROUTS_ID = new.USER_SPROUTS_ID;
			
			UPDATE APPLICATION_USER
			SET APPLICATION_USER_POINTS = APPLICATION_USER_POINTS + 10
			WHERE APPLICATION_USER_ID = new.APPLICATION_USER_ID;
	END IF;
	RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- After a user clicked the water button, reset the next alert date and add 10 points to the user.
DROP TRIGGER IF EXISTS after_plant_watered ON USER_SPROUTS;

CREATE TRIGGER after_plant_watered
AFTER UPDATE OF USER_SPROUTS_IS_WATERED ON USER_SPROUTS
FOR EACH ROW EXECUTE PROCEDURE reset_next_alert();


-- Make alert.
CREATE OR REPLACE FUNCTION make_alerts()
RETURNS TRIGGER
AS
$$
DECLARE
	plant_name VARCHAR(100);
BEGIN
	plant_name := (
		SELECT USER_SPROUTS_GIVEN_NAME
		FROM USER_SPROUTS
		WHERE USER_SPROUTS_ID = new.USER_SPROUTS_ID
	);
	IF
		current_date >= (SELECT USER_SPROUTS_NEXT_ALERT_DATE
						FROM USER_SPROUTS
				  		WHERE USER_SPROUTS_ID = new.USER_SPROUTS_ID)
		AND
		(
		SELECT USER_SPROUTS_IS_WATERED 
		FROM USER_SPROUTS
		WHERE USER_SPROUTS_ID = new.USER_SPROUTS_ID
		) = '0'
		THEN
			INSERT INTO ALERTS VALUES(new.USER_SPROUTS_ID, new.APPLICATION_USER_ID, CONCAT(plant_name, ' has to be watered!'));
	END IF;
	RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- When the next alert date is already passed and a user did not water their plant yet, create an alert.
DROP TRIGGER IF EXISTS creating_alerts ON USER_SPROUTS;

CREATE TRIGGER creating_alerts
AFTER UPDATE OF USER_SPROUTS_IS_WATERED ON USER_SPROUTS
FOR EACH ROW EXECUTE PROCEDURE make_alerts();


-- Delete alert and reset the next alert date.
CREATE OR REPLACE FUNCTION deleting_alerts()
RETURNS TRIGGER
AS
$$
DECLARE
BEGIN
	UPDATE USER_SPROUTS
	SET USER_SPROUTS_IS_WATERED = '1'
	WHERE USER_SPROUTS_ID = old.USER_SPROUTS_ID AND APPLICATION_USER_ID = old.APPLICATION_USER_ID;
	RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- When a user deleted an alert, water the plant.
DROP TRIGGER IF EXISTS delete_alert ON ALERTS;

CREATE TRIGGER delete_alert
AFTER DELETE ON ALERTS
FOR EACH ROW EXECUTE PROCEDURE deleting_alerts();


-- Reset the next alert date after the watering interval is changed.
CREATE OR REPLACE FUNCTION change_watering_interval()
RETURNS TRIGGER
AS
$$
DECLARE
	calculated_date DATE;
BEGIN
	IF
		new.USER_SPROUTS_LAST_WATERED IS NULL
		THEN
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
	ELSE
		calculated_date := (
							SELECT USER_SPROUTS_LAST_WATERED 
							FROM USER_SPROUTS 
							WHERE USER_SPROUTS_ID = new.USER_SPROUTS_ID
							);
		WHILE calculated_date <= current_date LOOP
				calculated_date := calculated_date + new.USER_SPROUTS_WATERING_INTERVALS;
		END LOOP;
		UPDATE USER_SPROUTS 
		SET USER_SPROUTS_NEXT_ALERT_DATE = calculated_date
		WHERE USER_SPROUTS_ID = new.USER_SPROUTS_ID;
	END IF;
	RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- When a user changed the watering interval, recalculate the next alert date.
DROP TRIGGER IF EXISTS watering_interval_change ON USER_SPROUTS;

CREATE TRIGGER watering_interval_change
AFTER UPDATE OF USER_SPROUTS_WATERING_INTERVALS ON USER_SPROUTS
FOR EACH ROW EXECUTE PROCEDURE change_watering_interval();