DELIMITER $$
	DROP TRIGGER IF EXISTS after_inset_lines;
	CREATE TRIGGER after_inset_lines
    AFTER INSERT ON hopi_hari_db.users_has_rides
    FOR EACH ROW
    BEGIN
    
		DECLARE wait_time INT;
        DECLARE line_count INT;
        DECLARE total_wait INT;
        
		SELECT waiting_time INTO wait_time
			FROM rides
            WHERE id = NEW.rides_id;

		SELECT count(users_id) INTO line_count
        FROM hopi_hari_db.users_has_rides
        WHERE Rides_id = NEW.Rides_id;
        
        set total_wait = wait_time * line_count;
        
       insert INTO notification (description, users_id, rides_id, status)
		VALUES (concat(total_wait, " minutos de espera para o brinquedo"), NEW.users_id, NEW.rides_id, true);
		END $$users_has_rides
    
DELIMITER ;