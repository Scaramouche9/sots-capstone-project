drop database if exists character_manager;
create database character_manager;
use character_manager;

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
    app_user_id int,
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