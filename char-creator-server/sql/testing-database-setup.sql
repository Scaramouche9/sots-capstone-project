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
(1, 'Sir Brobert', 4, 2, 3, 2, 16, 13, 15, 9, 12, 13, 16, 2, 20, 3, 23, 'A freedom-loving and carefree champion of the people.', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673470172/qrrol1iaupbv6zngzynt.jpg'),
(2, 'Grogurak Stonemuncher', 1, 1, 1, 1, 15, 12, 16, 10, 18, 7, 18, 3, 20, 7, 54, 'A stern defender of the dwarven lands.', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673470191/tg5ufngrdp4jekztb8mq.jpg'),
(3, 'Arcani Maguus', 2, 4, 5, 5, 6, 17, 9, 18, 12, 11, 13, 2, 30, 2, 7, 'The greatest wizard to ever walk the planes. Hopefully he stays away from any stiff breezes.', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673470241/ldmhwfod4edespv8x4c3.jpg'),
(4, 'Silvia Stickyhands', 3, 3, 2, 6, 9, 18, 13, 14, 8, 16, 16, 2, 25, 5, 30, 'Keep her away from your valuables. The name is a warning!', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673470951/jc60avjv7xl8ssnjbkoy.jpg'),
(5, 'Bartleby Higgentot', 1, 4, 6, 5, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'It''s like if Willem Dafoe starred in a live-action Fantasia remake', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673470274/hgpmmhwrwequbjjqquru.jpg'),
(6, 'Dobby the Doomer', 2, 1, 5, 3, 2, 6, 2, 3, 8, 10, 1, , 5, 1, 10, 'A free elf''s realization that the creator of his universe is such a huge, walking L.', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673471179/aczqdaffobupsdxb2vis.jpg'),
(7, 'Aloros', 3, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'Fierce, loyal, and honest to a fault', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673470493/we7xangk1sauufkeqedw.jpg'),
(8, 'Hooded Being', 2, 3, 1, 5, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'Probably a part of some remote village where the elders wear pig costumes to "keep order".', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673470588/gmpxxosrvax0jtba1d1k.jpg'),
(9, 'Sage Alaara', 2, 1, 5, 2, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'So in tune with nature that tree-mode has become involuntary', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673470651/ibiyxdwohvbtnpc0mjcc.jpg'),
(10, 'Monky Monkman', 4, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'Don''t let the friendly demeanor fool you, he will steal your hair for his toupee collection', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673470758/swoznyt7lh2pzbhskfvo.jpg'),
(11, 'Gorbo the Goblin', 3, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'Smart lil goblin being that knows how to have a good time with their pals', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673470907/l4gkq6widaxb52qeweki.jpg'),
(12, 'Viego', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'Ghosty sword prince man with a grudge', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673471480/xltjwjp9mccrgjhji5xm.jpg'),
(13, 'Aphelios', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'A vocally impaired sibling of the moon', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673471517/mdmils6lqivdxvbdicbi.jpg'),
(14, 'Vex', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'A yordle with a penchant for melodrama', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673471547/kjwqr5jdjvtsnczzwzuw.jpg'),
(15, 'Lucian', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'Two guns is better than one, especially when they shoot lasers and protect your dead wife from her soul-slaver', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673471609/jsfebnq1iwjj3sg8iv5b.jpg'),
(16, 'Neeko', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'A curious forest-born being that uses tricks and mimicry to fool her opponents.', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673471741/s2wn1m26q2plnapljse6.jpg'),
(17, 'Karma', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'A soul-guide that leads her people to safety and peace through empowerment and understanding.', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673471875/t8m8islhn1r10hcmie8z.jpg'),
(18, 'Twitch Shadowfoot', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'A light-footed rat being who takes pride in their ability to reload their crossbow in the blink of an eye.', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673471925/bgqo1njzlvzp3pazn673.jpg'),
(19, 'Dragonborn McMusky', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'A hardy adventurer, descended from dragons, who devours the souls of their ancestors in order to make their screams much more screamier.', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673472142/lqetpgx5yylheme94znd.jpg'),
(20, 'Big Daddy', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'A menacing nautical protector of children that also can somehow dash around like the 1000lbs of metal surrounding him doesn''t exist.', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673472261/oz7awb1siceszzornrcv.jpg'),
(21, 'Isaac', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'An engineer on a mission to become the most traumatized person in the universe', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673472309/srh9xlfan01oxaszqbxh.jpg'),
(22, 'Yivis Barkleather', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'A defender of all living things, unless those living things are real jerks then she doesn''t care that much.', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673472403/d3tcb2lbkwlevzyablsu.png'),
(23, 'Solanum', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'A beautiful explorer of life who will always live on in our memories and makes the void of space feel like a hearth in a home.', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673472490/xndvljhp9ed4wxpeu0fn.jpg'),
(24, 'Riebeck', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'The universe''s best and most goodest-looking banjo player.', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673472565/ntvqthcl0f9vsow3ahrq.jpg'),
(25, 'The Director', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'Glimpsing into the void leaves a mark on you, and apparently that mark can turn into a really cool job opportunity.', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673472625/mwk9s3vc3sr2tcl6x9uu.jpg'),
(26, 'Astra', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'She''s on a higher plane than you...literally.', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673472654/a3by4aijfmvejcamap1s.png'),
(27, 'Harbor', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'A thirsty ocean-boi with a really cool water-bendy arm-band thingy.', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673472703/wfjas4cspngaiiiywmb8.png'),
(28, 'Jace', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'A planeswalker, mind-mage, and representative of all things blue', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673472808/qizghw0enoodfamiqx67.jpg'),
(29 'Dani Ardor', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'A of a really creepy cult of daylight fanatics who prey on her need for catharsis and belonging.', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673472894/fpcpttk0grddelrbclp5.jpg'),
(30, 'Joy Wang', 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, , 0, 0, 0, 'She saw the donut with EVERYTHING on it, realized that nothing matters, and thus, that everything matters.', 2, 'http://res.cloudinary.com/dr8dbzjws/image/upload/v1673472964/w0hs0e969xgcpioz0vcr.jpg');











)

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
	(1, 'Sir Brobert', 4, 2, 3, 2, 16, 13, 15, 9, 12, 13, 16, 2, 20, 3, 23, 'A freedom-loving and carefree champion of the people.', 2, ''),
	(2, 'Grogurak Stonemuncher', 1, 1, 1, 1, 15, 12, 16, 10, 18, 7, 18, 3, 20, 7, 54, 'A stern defender of the dwarven lands.', 2, ''),
	(3, 'Arcani Maguus', 2, 4, 5, 5, 6, 17, 9, 18, 12, 11, 13, 2, 30, 2, 7, 'The greatest wizard to ever walk the planes. Hopefully he stays away from any stiff breezes.', 2, ''),
	(4, 'Silvia Stickyhands', 3, 3, 2, 6, 9, 18, 13, 14, 8, 16, 16, 2, 25, 5, 30, 'Keep her away from your valuables. The name is a warning!', 2, '');
    
end //
delimiter ;
