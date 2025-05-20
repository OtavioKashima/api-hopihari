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