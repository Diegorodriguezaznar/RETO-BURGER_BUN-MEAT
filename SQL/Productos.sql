////////////////////////////////INSERTS PRODUCTOS

BEGIN

INSERT INTO PRODUCTOS 
VALUES ('P-01','https://www.thespruceeats.com/thmb/Xjfz19TgtiiSjHhMI3whqwfJIrM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ground-veal-burgers-3061994-hero-01-90c7a409789a4261bc15ec65b726381f.jpg', 'Meat_Veal', 'Beef Veal burger with cheese, lettuce and sauces (few chips include).', 'CP-1', 8.99);

INSERT INTO PRODUCTOS 
VALUES ('P-02','https://www.kalfsvleesrecepten.nl/uploads/430_large.jpg', 'Meat_Veal_Complete', 'Beef Veal burger with double cheese, lettuce, sauces and bacon (includes some fries).', 'CP-1', 10.99);

INSERT INTO PRODUCTOS 
VALUES ('P-03','https://lucasgrillburger.com/wp-content/uploads/2022/03/tripe_cheese_burger.jpg', 'Meat_Veal_SMASH', 'Double Beef Veal burger with double cheese, lettuce, sauces, bacon and onion (includes some fries).', 'CP-1', 13.99);

INSERT INTO PRODUCTOS 
VALUES ('P-04','https://img.delicious.com.au/9mwaUVSJ/w1200/del/2019/04/basic-beef-burger-104842-2.jpg', 'Meat_Beef', 'Beef burger with cheese, lettuce and sauces (few chips include).', 'CP-1', 9.99);

INSERT INTO PRODUCTOS 
VALUES ('P-05','https://flaevor.com/wp-content/uploads/2021/05/AussieBeefBurger-Flaevor.jpg', 'Meat_Beef_Complete', 'Beef burger with double cheese, lettuce, sauces and bacon (includes some fries).', 'CP-1', 12.99);

INSERT INTO PRODUCTOS 
VALUES ('P-06','https://images.immediate.co.uk/production/volatile/sites/2/2015/04/2015-02-24-olive-test-d5b505c.jpg?quality=90&crop=7px,1865px,3278px,1410px&resize=556,505', 'Meat_Beef_SMASH', 'Double Beef burger with double cheese, lettuce, sauces, bacon and onion (includes some fries).', 'CP-1', 14.99);

INSERT INTO PRODUCTOS 
VALUES ('P-07','https://images.immediate.co.uk/production/volatile/sites/2/2017/06/Butchies-2-1-9fdd3c4.jpg?quality=90&resize=556,505', 'Meat_Chicken', 'Chicken burger with cheese, lettuce and sauces (few chips include).', 'CP-1', 7.99);

INSERT INTO PRODUCTOS 
VALUES ('P-08','https://www.hintofhealthy.com/wp-content/uploads/2021/07/Crispy-Chicken-Burger.jpg', 'Meat_Chicken_Complete', 'Chicken burger with double cheese, lettuce, sauces and bacon (includes some fries).', 'CP-1', 9.99);

INSERT INTO PRODUCTOS 
VALUES ('P-09','https://d3c699y7ogacoe.cloudfront.net/wp-content/uploads/2022/04/Header-2022-04-29T132105.636.jpg', 'Meat_Chicken_SMASH', 'Double chicken burger with double cheese, lettuce, sauces, bacon and onion (includes some fries).', 'CP-1', 11.99);






EXCEPTION

WHEN OTHERS THEN


ROLLBACK;

END;


//////////////////////////////////////////////////////FALTAN ESTOS////////////////////////////////////////////////////////////////////////////////////////
INSERT INTO PRODUCTOS 
VALUES ('P-10', 'Meat_Ternasco', 'Ternasco burger with cheese', 'Ternasco burger with cheese, lettuce and sauces (few chips include).', 'CP-1', 9.99);

INSERT INTO PRODUCTOS 
VALUES ('P-11', 'Meat_Ternasco_Complete', 'Ternasco burger with double cheese', 'Ternasco burger with double cheese, lettuce, sauces and bacon (includes some fries).', 'CP-1', 10.99);

INSERT INTO PRODUCTOS 
VALUES ('P-12', 'Meat_Ternasco_SMASH', 'Double Ternasco burger with double cheese', 'Double Ternasco burger with double cheese, lettuce, sauces, bacon and onion (includes some fries).', 'CP-1', 13.99);

INSERT INTO PRODUCTOS 
VALUES ('P-13', 'Meat_Vegan', 'Vegan burger with tofu', 'Vegan burger with tofu, lettuce and pickles (few chips include).', 'CP-1', 10.99);

INSERT INTO PRODUCTOS 
VALUES ('P-14', 'Meat_Vegan_Complete', 'Vegan burger with double tofu', 'Vegan burger with double tofu, lettuce, double pickles and onion (includes some fries).', 'CP-1', 12.99);

INSERT INTO PRODUCTOS 
VALUES ('P-15', 'Meat_Vegan_SMASH', 'Double Vegan burger with double tofu', 'Double Vegan burger with double tofu, lettuce, pickles, double onion and chips inside (includes some fries).', 'CP-1', 15.99);

INSERT INTO PRODUCTOS 
VALUES ('P-16', 'Meat_Kraken', 'Squids burger with cheese', 'Squids burger with cheese, lettuce and sauces (few chips include).', 'CP-1', 8.99);

INSERT INTO PRODUCTOS 
VALUES ('P-17', 'Meat_Kraken_Complete', 'Squids burger with double cheese', 'Squids burger with double cheese, lettuce, sauces and bacon (includes some fries).', 'CP-1', 9.99);

INSERT INTO PRODUCTOS 
VALUES ('P-18', 'Meat_Kraken_SMASH', 'Double Squid burger with double cheese', 'Double Squid burger with double cheese, lettuce, sauces, bacon and onion (includes some fries).', 'CP-1', 11.99);

INSERT INTO PRODUCTOS 
VALUES ('P-19', 'Nachos', 'Nachos with guacamole sauce', 'Nachos with guacamole sauce.', 'CP-2', 5.99);

INSERT INTO PRODUCTOS
VALUES ('P-20', 'Onion_Rings', 'Onion rings with BBQ sauce and yogurt sauce', 'Onion rings with BBQ sauce and yogurt sauce.', 'CP-2', 6.99);

INSERT INTO PRODUCTOS
VALUES ('P-21', 'French_fries', 'Those of a lifetime', 'Those of a lifetime.', 'CP-2', 4.99);

INSERT INTO PRODUCTOS
VALUES ('P-22', 'Meat_balls','Meatballs with tomato', 'Meatballs with tomato.', 'CP-2', 7.99);

INSERT INTO PRODUCTOS
VALUES ('P-23', 'Chicken_fingers', '8 Chicken fingers', '8 Chicken fingers.', 'CP-2', 6.99);

INSERT INTO PRODUCTOS
VALUES ('P-24', 'Fries_deluxe', 'Deluxe potatoes with deluxe sauce', 'Deluxe potatoes with deluxe sauce.', 'CP-2', 5.99);

INSERT INTO PRODUCTOS
VALUES ('P-25', 'Croquettes', '4 Croquettes, 2 ham and cheese / 2 meat', '4 Croquettes, 2 ham and cheese / 2 meat.', 'CP-2', 5.99);

INSERT INTO PRODUCTOS 
VALUES ('P-26', 'CheeseCake', 'Homemade cheesecake', 'Homemade cheesecake.', 'CP-3', 4.99);

INSERT INTO PRODUCTOS
VALUES ('P-27', 'CarrotCake', 'Homemade Carrot cake', 'Homemade Carrot cake.', 'CP-3', 3.99);

INSERT INTO PRODUCTOS
VALUES ('P-28', 'ChocolateCake', 'Homemade Chocolate cake', 'Homemade Chocolate cake.', 'CP-3', 3.99);

INSERT INTO PRODUCTOS 
VALUES ('P-29', 'StrawberryCake', 'Homemade Strawberry cake', 'Homemade Strawberry cake.', 'CP-3', 3.99);

INSERT INTO PRODUCTOS 
VALUES ('P-30', 'Choclate_mousse', 'Chocolate Mousse with forest fruits', 'Chocolate Mousse with forest fruits.', 'CP-3', 3.99);

INSERT INTO PRODUCTOS
VALUES ('P-31', 'Custard', 'Flan with cream', 'Flan with cream.', 'CP-3', 3.99);

INSERT INTO PRODUCTOS
VALUES ('P-32', 'Churros', 'Churros with Chocolate Cup', 'Churros with Chocolate Cup.', 'CP-3', 4.99);



EXCEPTION

WHEN OTHERS THEN


ROLLBACK;

END;
