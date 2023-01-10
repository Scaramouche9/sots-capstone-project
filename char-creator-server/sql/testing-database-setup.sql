drop database if exists character_manager_test;
create database character_manager_test;
use character_manager_test;

create table app_user (
    app_user_id int primary key auto_increment,
    username varchar(50) not null unique,
    password_hash varchar(2048) not null,
    enabled bit not null default(1)
);

create table app_role (
    app_role_id int primary key auto_increment,
    `name` varchar(50) not null unique
);

create table app_user_role (
    app_user_id int not null,
    app_role_id int not null,
    constraint pk_app_user_role
        primary key (app_user_id, app_role_id),
    constraint fk_app_user_role_user_id
        foreign key (app_user_id)
        references app_user(app_user_id),
	constraint fk_app_user_role_role_id
        foreign key (app_role_id)
        references app_role(app_role_id)
);

insert into app_role (`name`) values
    ('USER'),
    ('ADMIN');

-- passwords are set to "P@ssw0rd!"
insert into app_user (username, password_hash, enabled)
    values
    ('john@smith.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1),
    ('sally@jones.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1);

insert into app_user_role
    values
    (1, 2),
    (2, 1);

create table player_class (
    class_id int primary key auto_increment,
    class_name varchar(40) not null
);

create table species (
    species_id int primary key auto_increment,
    species_name varchar(40) not null
);

create table background (
    background_id int primary key auto_increment,
    background_name varchar(40) not null
);

create table alignment (
    alignment_id int primary key auto_increment,
    alignment_name varchar(40) not null
);

create table `character` (
    character_id int primary key auto_increment,
    character_name varchar(50) not null,
    species_id int not null,
    class_id int not null,
    background_id int not null,
    alignment_id int not null,
    strength int,
    dexterity int,
    constitution int,
    intelligence int,
    wisdom int,
    charisma int,
    armor_class int,
    proficiency_bonus int,
    speed int,
    `level` int,
    hitpoints int,
    `description` varchar(400),
    app_user_id int not null,
    image varchar(400),
    constraint fk_character_class_id
        foreign key (class_id)
        references player_class(class_id),
    constraint fk_character_species_id
        foreign key (species_id)
        references species(species_id),
    constraint fk_character_background_id
        foreign key (background_id)
        references background(background_id),
	constraint fk_character_alignment_id
        foreign key (alignment_id)
        references alignment(alignment_id),
	constraint fk_character_app_user_id
        foreign key (app_user_id)
        references app_user(app_user_id)
);

insert into alignment values (1, 'LG'), (2, 'NG'), (3, 'CG'), (4, 'LN'), (5, 'N'), (6, 'CN'), (7, 'LE'), (8, 'NE'), (9, 'CE');

insert into species values (1, 'Dwarf'), (2, 'Elf'), (3, 'Halfling'), (4, 'Human');

insert into player_class values (1, 'Cleric'), (2, 'Fighter'), (3, 'Rogue'), (4, 'Wizard');

insert into background values (1, 'Acolyte'), (2, 'Criminal'), (3, 'Folk Hero'), (4, 'Noble'), (5, 'Sage'), (6, 'Soldier');

insert into `character` values 
(1, 'Sir Brobert', 4, 2, 3, 2, 16, 13, 15, 9, 12, 13, 16, 2, 20, 3, 23, 'A freedom-loving and carefree champion of the people.', 2, 'test'),
(2, 'Grogurak Stonemuncher', 1, 1, 1, 1, 15, 12, 16, 10, 18, 7, 18, 3, 20, 7, 54, 'A stern defender of the dwarven lands.', 2, 'test'),
(3, 'Arcani Maguus', 2, 4, 5, 5, 6, 17, 9, 18, 12, 11, 13, 2, 30, 2, 7, 'The greatest wizard to ever walk the planes. Hopefully he stays away from any stiff breezes.', 2, 'test'),
(4, 'Silvia Stickyhands', 3, 3, 2, 6, 9, 18, 13, 14, 8, 16, 16, 2, 25, 5, 30, 'Keep her away from your valuables. The name is a warning!', 2, 'test');

delimiter //
create procedure set_known_good_state()
begin

	SET SQL_SAFE_UPDATES = 0;
	delete from `character`;
    alter table `character` auto_increment = 1;
	delete from species;
    alter table species auto_increment = 1;
	delete from player_class;
    alter table player_class auto_increment = 1;
	delete from background;
	alter table background auto_increment = 1;
    SET SQL_SAFE_UPDATES = 1;

	insert into species values (1, 'Dwarf'), (2, 'Elf'), (3, 'Halfling'), (4, 'Human');

	insert into player_class values (1, 'Cleric'), (2, 'Fighter'), (3, 'Rogue'), (4, 'Wizard');

	insert into background values (1, 'Acolyte'), (2, 'Criminal'), (3, 'Folk Hero'), (4, 'Noble'), (5, 'Sage'), (6, 'Soldier');

	insert into `character` values 
	(1, 'Sir Brobert', 4, 2, 3, 2, 16, 13, 15, 9, 12, 13, 16, 2, 20, 3, 23, 'A freedom-loving and carefree champion of the people.', 2, 'test'),
	(2, 'Grogurak Stonemuncher', 1, 1, 1, 1, 15, 12, 16, 10, 18, 7, 18, 3, 20, 7, 54, 'A stern defender of the dwarven lands.', 2, 'test'),
	(3, 'Arcani Maguus', 2, 4, 5, 5, 6, 17, 9, 18, 12, 11, 13, 2, 30, 2, 7, 'The greatest wizard to ever walk the planes. Hopefully he stays away from any stiff breezes.', 2, 'test'),
	(4, 'Silvia Stickyhands', 3, 3, 2, 6, 9, 18, 13, 14, 8, 16, 16, 2, 25, 5, 30, 'Keep her away from your valuables. The name is a warning!', 2, 'test');
    
end //
delimiter ;
