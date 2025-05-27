insert into users(first_name, last_name, email, password, birth_date, phone) values
("Otavio", "Kashima", "kashima@gmail.com", "$10$EylpY.Qgws0ldA9EP7Qiv.T2sie2/T8Wy0LLki6mIxTfx4uDQZa0C", '2008-08-05', "14997679303"),
("Nicolas", "Souza", "gay123@gmail.com", "$10$bXdL70gyP2sZ/ijiR29PBO3CBHeB1NH5Z2mFn18W1eRwqaAnpAj3O", '2008-06-02', "14997679302"),
("Miguel", "Naruto", "datebayo@gmail.com", "$10$J74qVRIZSVF1x7BPj1G8eezRgqm3vNp4WeaevRs30uG93InfxGg6a", '2008-11-10', "14997679301");

insert into rides (name, waiting_time, status, area) values
("Kami-Kaze", 8, "Normal", "A"),
("Minhocão", 20, "Movimentado", "A"),
("Barco-Viking", 5, "Normal", "B");

insert into users_has_rides (users_id, Rides_id) values
(9,16),
(10,16),
(11,17),
(10,17),
(10,18),
(9,18);

-- ----------------------------------------------------------------------------------------------------------------------

	select users.first_name as name, 
			users_id,
            rides.name,
            rides.id
	from `users_has_rides`
    
	inner join users
		on users.id = `users_has_rides`.users_id
	inner join rides
		on rides.id = `users_has_rides`.Rides_id

-- ------------------------------------------------------------------------------------------------------------------------

use hopi_hari_db;

Desc hopi_hari_db.users_has_rides;
select * from users; # 6
select * from  rides; #15
select * from hopi_hari_db.users_has_rides;

insert into hopi_hari_db.users_has_rides (users_id, rides_id) values (15, 6);

select waiting_time from rides where id = 15; # 5 min
select count(users_id) from hopi_hari_db.users_has_rides where rides_id = 15; # 1 pessoa

select
	(select waiting_time from rides where id = 15)*
    (select count(users_id) from hopi_hari_db.users_has_rides where rides_id = 15)
	as total_wait_time;
    
desc notification;
insert into notification (description, users_id, rides_id, status)
values (concat(total_wait_time, "minutos de espera para o brinquedo"), 15, 6, true);

----------------------------------------------------------------------------------------------------------------------

  INSERT INTO areas (name) VALUES 
("Aribabiba"),
("Mistieri"),
("Infantasia"),
("Kaminda-Mundi"),
("Wild-West");
  ------------------------------------------------------------------------------------------------------------
  
INSERT INTO rides (name, waiting_time, status, areas_id) VALUES
   ("Hadikali", 15, "Normal", (SELECT id FROM areas WHERE name = "Aribabiba")),
  ("Vambatê", 5, "Movimentado", (SELECT id FROM areas WHERE name = "Aribabiba")),
  ("Jambalaia", 8, "Normal", (SELECT id FROM areas WHERE name = "Aribabiba")),
  ("Parangolé", 6, "Movimentado", (SELECT id FROM areas WHERE name = "Aribabiba")),
  ("Aribabobi", 7, "Movimentado", (SELECT id FROM areas WHERE name = "Aribabiba")),
  ("Cinemotion", 7, "Movimentado", (SELECT id FROM areas WHERE name = "Aribabiba")),
  ("SPEEDI ´64", 12, "Movimentado", (SELECT id FROM areas WHERE name = "Aribabiba")),
  
  ("Montezum", 20, "Normal", (SELECT id FROM areas WHERE name = "Mistieri")),
  ("Vurang", 18, "Movimentado", (SELECT id FROM areas WHERE name = "Mistieri")),
  ("Ekatomb", 10, "Normal", (SELECT id FROM areas WHERE name = "Mistieri")),
  ("Simulákron", 8, "Movimentado", (SELECT id FROM areas WHERE name = "Mistieri")),
  ("Vulaviking", 12, "Normal", (SELECT id FROM areas WHERE name = "Mistieri")),
  ("Katakumb", 14, "Movimentado", (SELECT id FROM areas WHERE name = "Mistieri")),
  
  ("Kastel di Lendas", 6, "Normal", (SELECT id FROM areas WHERE name = "Infantasia")),
  ("Giranda Pokotó", 5, "Movimentado", (SELECT id FROM areas WHERE name = "Infantasia")),
  ("Tuca do Ugo", 5, "Movimentado", (SELECT id FROM areas WHERE name = "Infantasia")),
  ("Bugabalum", 7, "Normal", (SELECT id FROM areas WHERE name = "Infantasia")),
  ("Astronavi", 5, "Normal", (SELECT id FROM areas WHERE name = "Infantasia")),
  ("Komboio", 8, "Movimentado", (SELECT id FROM areas WHERE name = "Infantasia")),
  ("Giralata", 5, "Normal", (SELECT id FROM areas WHERE name = "Infantasia")),
  ("Dispenkito", 6, "Movimentado", (SELECT id FROM areas WHERE name = "Infantasia")),
  ("Klapi Klapi", 9, "Normal", (SELECT id FROM areas WHERE name = "Infantasia")),
  
   ("Rio Bravo", 10, "Movimentado", (SELECT id FROM areas WHERE name = "Wild-West")),
  ("Evolution", 5, "Normal", (SELECT id FROM areas WHERE name = "Wild-West")),
  ("Bravo Bull", 5, "Movimentado", (SELECT id FROM areas WHERE name = "Wild-West")),
  ("Ghosti Hotel", 12, "Normal", (SELECT id FROM areas WHERE name = "Wild-West")),
  ("Vamvolari", 8, "Movimentado", (SELECT id FROM areas WHERE name = "Wild-West")),
  ("La Mina del Joe Sacramento", 9, "Normal", (SELECT id FROM areas WHERE name = "Wild-West")),
  ("Namuskita", 7, "Movimentado", (SELECT id FROM areas WHERE name = "Wild-West")),
	("Spleshi", 5, "Movimentado", (SELECT id FROM areas WHERE name = "Wild-West")),
  ("Tirolesa", 15, "Normal", (SELECT id FROM areas WHERE name = "Wild-West")),
  
    ("Giranda Mundi", 5, "Movimentado", (SELECT id FROM areas WHERE name = "Kaminda-Mundi")),
  ("Jogakí di Kaminda", 6, "Normal", (SELECT id FROM areas WHERE name = "Kaminda-Mundi")),
  ("Theatro di Kaminda", 6, "Normal", (SELECT id FROM areas WHERE name = "Kaminda-Mundi")),
  ("Le Voyage", 7, "Movimentado", (SELECT id FROM areas WHERE name = "Kaminda-Mundi"));
  