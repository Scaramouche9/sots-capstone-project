drop database if exists character_manager;
create database character_manager;
use character_manager;

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
    intelligence int,
    wisdom int,
    charisma int,
    armor_class int,
    proficiency_bonus int,
    speed int,
    `level` int,
    hitpoints int,
    `description` varchar(400),
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
        references alignment(alignment_id)
);

insert into alignment values (1, 'LG'), (2, 'NG'), (3, 'CG'), (4, 'LN'), (5, 'N'), (6, 'CN'), (7, 'LE'), (8, 'NE'), (9, 'CE');