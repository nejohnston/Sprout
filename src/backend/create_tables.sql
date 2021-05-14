CREATE TABLE TEAM (
    TEAM_ID 		SERIAL 		    PRIMARY KEY,
    TEAM_NAME 		VARCHAR(20) 	NOT NULL,
    TEAM_POINTS 	INTEGER 		DEFAULT 0,
    TEAM_IMAGE_URL 	VARCHAR(100) 	NOT NULL
);

CREATE TABLE APPLICATION_USER (
    APPLICATION_USER_ID 			    SERIAL 		    PRIMARY KEY          ,
    TEAM_ID 				            INTEGER 		NOT NULL             ,
    APPLICATION_USER_USERNAME 		    VARCHAR(20) 	NOT NULL 	UNIQUE   ,
    APPLICATION_USER_PASSWORD 		    VARCHAR(50) 	NOT NULL             ,
    APPLICATION_USER_PREFERRED_NAME 	VARCHAR(20) 	NOT NULL             ,
    APPLICATION_USER_POINTS 		    INTEGER	 	    NOT NULL 	DEFAULT 0,
    FOREIGN KEY(TEAM_ID) REFERENCES TEAM ON UPDATE CASCADE
);

CREATE TABLE USER_SPROUTS (
    USER_SPROUTS_ID 			        SERIAL 		    PRIMARY KEY              ,
    APPLICATION_USER_ID 			    INTEGER 		NOT NULL                 ,
    USER_SPROUTS_GIVEN_NAME 		    VARCHAR(100) 	NOT NULL                 ,
    USER_SPROUTS_TYPE 			        VARCHAR(50) 	DEFAULT NULL             ,	
    USER_SPROUTS_FAMILY 			    VARCHAR(50) 	DEFAULT NULL             ,	
    USER_SPROUTS_WATERING_INTERVALS 	INTEGER 		NOT NULL                 ,
    USER_SPROUTS_NOTES 			        VARCHAR(300) 	DEFAULT NULL             ,
    USER_SPROUTS_IS_WATERED 		    BIT 		    NOT NULL 	DEFAULT '0'  ,
    USER_SPROUTS_DATE_ADDED 		    DATE 		    NOT NULL 	DEFAULT NOW(),
    USER_SPROUTS_LAST_WATERED           DATE                                     ,  
    USER_SPROUTS_NEXT_ALERT_DATE 	    DATE 		    NOT NULL 	DEFAULT NOW(),
    FOREIGN KEY(APPLICATION_USER_ID) REFERENCES APPLICATION_USER ON UPDATE CASCADE
);

CREATE TABLE PLANT (
    PLANT_ID 			        SERIAL 		PRIMARY KEY,
    PLANT_SCIENTIFIC_NAME 	    VARCHAR(500)           ,
    PLANT_COMMON_NAME 		    VARCHAR(500)           ,
    PLANT_FAMILY_NAME 		    VARCHAR(500)           ,
    PLANT_TYPE 			        VARCHAR(500)           ,
    PLANT_IMG_URL 		        VARCHAR(500)           ,
    PLANT_HABIT 			    VARCHAR(500)           ,
    PLANT_FORM 			        VARCHAR(500)           ,
    PLANT_TEXTURE 		        VARCHAR(500)           ,
    PLANT_MATURE_HEIGHT 		VARCHAR(500)           ,
    PLANT_MATURE_SPREAD 		VARCHAR(500)           ,
    PLANT_GROWTH_RATE 		    VARCHAR(500)           ,
    PLANT_ORIGIN 			    VARCHAR(500)           ,
    PLANT_HARDINESS_RATING 	    VARCHAR(500)           ,
    PLANT_EXPOSURE 		        VARCHAR(500)           ,
    PLANT_SOIL 			        VARCHAR(500)           ,
    PLANT_WATER_USE 		    VARCHAR(500)           ,
    PLANT_LANDSCAPE_USES 	    VARCHAR(500)           ,
    PLANT_LEAF_FORM 		    VARCHAR(500)           ,
    PLANT_LEAF_ARRANGEMENT 	    VARCHAR(500)           ,
    PLANT_LEAF_TEXTURE 		    VARCHAR(500)           ,
    PLANT_LEAF_SURFACES 		VARCHAR(500)           ,
    PLANT_LEAF_COLOR_IN_FALL 	VARCHAR(500)           ,
    PLANT_INFLORESCENCE_TYPE 	VARCHAR(500)           ,
    PLANT_FLOWER_MORPHOLOGY 	VARCHAR(500)           ,
    PLANT_FLOWER_COLOR 		    VARCHAR(500)           ,
    PLANT_FLOWER_TIME_AT_PEAK 	VARCHAR(500)           ,
    PLANT_FRUIT_TYPE 		    VARCHAR(500)           ,
    PLANT_FRUIT_COLOR 		    VARCHAR(500)           ,
    PLANT_FRUIT_TIME 		    VARCHAR(500)           ,
    PLANT_BARK_MORPHOLOGY 	    VARCHAR(500)           ,
    PLANT_BARK_COLOR 		    VARCHAR(500)           ,
    PLANT_ORGAN_MODIFICATIONS 	VARCHAR(500)           ,
    PLANT_PROPAGATION 		    VARCHAR(500)           ,
    PLANT_PEST_SUSCEPTIBILITY 	VARCHAR(500)           ,
    PLANT_SPECIFIC_PESTS 		VARCHAR(500)
);

CREATE TABLE SPROUT_TIPS (
    SPROUT_TIPS_ID	    SERIAL 		    PRIMARY KEY,
    SPROUT_TIPS_CONTENT	VARCHAR(500)	NOT NULL
);