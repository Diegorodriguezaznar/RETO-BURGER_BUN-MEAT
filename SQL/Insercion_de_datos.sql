////////////////////////////////INSERTS CATEGORIA_PRODUCTO

BEGIN

INSERT INTO CATEGORIA_PRODUCTO
VALUES (1, 'Hamburguesa');

INSERT INTO CATEGORIA_PRODUCTO
VALUES (2, 'Guarnicion');

INSERT INTO CATEGORIA_PRODUCTO
VALUES (3, 'Postre');

INSERT INTO CATEGORIA_PRODUCTO
VALUES (4, 'Bebida');


INSERT INTO CATEGORIA_PRODUCTO
VALUES (5, 'Comida-Zaragoza');


EXCEPTION

WHEN OTHERS THEN

ROLLBACK;

END;

//CONFIRMACION DE SU CREACION
SELECT * FROM CATEGORIA_PRODUCTO;

//BORRADO DE DATOS



////////////////////////////////INSERTS CATEGORIA_EMPLEADO

BEGIN

INSERT INTO CATEGORIA_EMPLEADO
VALUES ('CE-1', 'Cocinero');

INSERT INTO CATEGORIA_EMPLEADO
VALUES ('CE-2', 'Camarero');

INSERT INTO CATEGORIA_EMPLEADO
VALUES ('CE-3', 'Limpieza');

INSERT INTO CATEGORIA_EMPLEADO 
VALUES ('CE-4', 'Gerente');

EXCEPTION

WHEN OTHERS THEN

ROLLBACK;

END;


//CONFIRMACION DE SU CREACION
SELECT * FROM CATEGORIA_EMPLEADO;

////////////////////////////////INSERTS PRODUCTOS



BEGIN

INSERT INTO PRODUCTOS 
VALUES (1,'https://i.pinimg.com/originals/f0/32/d2/f032d291405471b038f425a91b8b9724.png', 'MEAT VEAL', 'Beef Veal burger with cheese, lettuce and sauces.', 1, 8);

INSERT INTO PRODUCTOS 
VALUES (2,'https://i.pinimg.com/originals/a7/a7/a6/a7a7a60840d7a53363b3438fa2899b03.png', 'MEAT VEAL COMPLETE', 'Beef Veal burger with double cheese, lettuce, sauces and bacon.', 1, 9);

INSERT INTO PRODUCTOS 
VALUES (3,'https://i.pinimg.com/originals/dd/43/22/dd43229d28aa0a59eafdb60576da5158.png', 'MEAT VEAL SMASH', 'Double Beef Veal burger with double cheese, lettuce, sauces, bacon and onion.', 1, 9);

INSERT INTO PRODUCTOS 
VALUES (4,'https://i.pinimg.com/originals/3b/a9/a5/3ba9a51a1d1ebfbad7343a04f5e6caf0.png', 'MEAT BEEF', 'Beef burger with cheese, lettuce and sauces.', 1, 5);

INSERT INTO PRODUCTOS 
VALUES (5,'https://i.pinimg.com/originals/98/f7/a0/98f7a0b809ad39dfe34bfb956c9eb961.png', 'MEAT BEEF COMPLETE', 'Beef burger with double cheese, lettuce, sauces and bacon.', 1, 7);

INSERT INTO PRODUCTOS 
VALUES (6,'https://i.pinimg.com/originals/77/f6/74/77f674182966a383cae4c087e8c1c36c.png', 'MEAT BEEF SMASH', 'Double Beef burger with double cheese, lettuce, sauces, bacon and onion.', 1, 9);

INSERT INTO PRODUCTOS 
VALUES (7,'https://i.pinimg.com/originals/09/87/d1/0987d1f0a1b02001483333cc7c07aada.png', 'MEAT CHICKEN ', 'Chicken burger with cheese, lettuce and sauces.', 1, 5);

INSERT INTO PRODUCTOS 
VALUES (8,'https://i.pinimg.com/originals/63/4c/07/634c071a4a3b7a585e5529b360e38439.png', 'MEAT CHICKEN COMPLETE', 'Chicken burger with double cheese, lettuce, sauces and bacon.', 1, 7);

INSERT INTO PRODUCTOS 
VALUES (9,'https://i.pinimg.com/originals/6f/2f/9c/6f2f9c93c3e83ff14e50e19180f4e53b.png', 'MEAT CHICKEN SMASH', 'Double chicken burger with double cheese, lettuce, sauces, bacon and onion.', 1, 9);

INSERT INTO PRODUCTOS 
VALUES (10, 'https://i.pinimg.com/originals/d4/70/9d/d4709d3ce27b702632675cfcc6f17104.png', 'LA TERNASCO', 'Ternasco burger with cheese, lettuce and sauces.', 5, 5);

INSERT INTO PRODUCTOS 
VALUES (11, 'https://i.pinimg.com/originals/dd/5c/ac/dd5cac1cc89beca55570e0b0995bab0d.png', 'MEAT VEGAN', 'Vegan burger with tofu, lettuce and pickles.', 1, 5);

INSERT INTO PRODUCTOS 
VALUES (12, 'https://i.pinimg.com/originals/ab/b0/e5/abb0e534139c84a4500006dee7f2fadf.png', 'MEAT VEGAN COMPLETE', 'Vegan burger with double tofu, lettuce, double pickles and onion.', 1, 7);

INSERT INTO PRODUCTOS 
VALUES (13, 'https://i.pinimg.com/originals/c8/53/3a/c8533a27af595ecea537f0239857bf47.png', 'MEAT VEGAN SMASH', 'Double Vegan burger with double tofu, lettuce, pickles, double onion and chips inside.', 1, 9);

INSERT INTO PRODUCTOS 
VALUES (14, 'https://i.pinimg.com/originals/79/22/75/792275f0e00a18ec5eccdbda56561860.png', 'MEAT KRAKEN', 'Squids burger with cheese, lettuce and sauces.', 5, 5);

INSERT INTO PRODUCTOS 
VALUES (15, 'https://i.pinimg.com/originals/5b/0a/15/5b0a1512172cde6355e5f5d8e1667dbd.png', 'NACHOS',  'Nachos with guacamole sauce.', 2, 5);

INSERT INTO PRODUCTOS
VALUES (16, 'https://i.pinimg.com/originals/01/55/57/01555752c965c256585ead33d9ff7e8b.png', 'ONION RINGS', 'Onion rings with BBQ sauce and yogurt sauce.', 2, 6);

INSERT INTO PRODUCTOS
VALUES (17, 'https://i.pinimg.com/originals/f8/c9/b1/f8c9b18f215a4105814454fb8dc01612.png', 'POTATOES', 'Those of a lifetime.', 2, 4);

INSERT INTO PRODUCTOS
VALUES (18, 'https://i.pinimg.com/originals/28/93/a6/2893a65ee0732d11a80f49a1252fc3dd.png', 'MEAT BALLS', 'Meatballs with tomato.', 2, 5);

INSERT INTO PRODUCTOS
VALUES (19, 'https://i.pinimg.com/originals/71/fd/3f/71fd3fd98ea143a70b3f2b32e18682b2.png', 'CHICKEN FINGERS', '8 Chicken fingers.', 2, 3);

INSERT INTO PRODUCTOS
VALUES (20, 'https://i.pinimg.com/originals/e7/6c/17/e76c17aeb92379d4e8596208fb9fa525.png', 'DELUXE POTATOES', 'Deluxe potatoes with deluxe sauce.', 2, 3);

INSERT INTO PRODUCTOS
VALUES (21, 'https://i.pinimg.com/originals/1a/be/84/1abe84d101ddd966327b4bccc1096e4c.png', 'CROQUETTES', '4 Croquettes, 2 ham and cheese / 2 meat.', 5, 5);

INSERT INTO PRODUCTOS 
VALUES (22, 'https://i.pinimg.com/originals/0b/0a/8e/0b0a8e4a78d833c367aba38acb20f348.png', 'CHEESE CAKE', 'Homemade cheesecake.', 3, 4);

INSERT INTO PRODUCTOS
VALUES (23, 'https://i.pinimg.com/originals/91/71/97/917197ef411bbef62783a58048048d3c.png', 'CARROT CAKE', 'Homemade Carrot cake.', 3, 3);

INSERT INTO PRODUCTOS
VALUES (24, 'https://i.pinimg.com/originals/c5/f1/1e/c5f11e60b6c8c212c071a104b9b04a3a.png', 'CHOCOLATE CAKE', 'Homemade Chocolate cake.', 3, 3);

INSERT INTO PRODUCTOS 
VALUES (25, 'https://i.pinimg.com/originals/47/b8/39/47b839ccd9db13f542b8f365e243447f.png', 'STRAWBERRY CAKE', 'Homemade Strawberry cake.', 3, 3);

INSERT INTO PRODUCTOS 
VALUES (26, 'https://i.pinimg.com/originals/fe/1e/27/fe1e2750d83dccbd5eb11fd96816daf5.png', 'CHOCOLATE MOUSSE', 'Chocolate Mousse with forest fruits.', 3, 3);

INSERT INTO PRODUCTOS
VALUES (27, 'https://i.pinimg.com/originals/72/7b/bf/727bbff6793a8e3482be9727b6bb17c8.png', 'CHURROS', 'Churros with Chocolate Cup.', 5, 4);



INSERT INTO PRODUCTOS
VALUES (28, 'https://i.pinimg.com/originals/b5/3c/dd/b53cdd6321cb0713d22c425e6ab61da8.png', 'Coca-Cola', ' ', 4, 1);

INSERT INTO PRODUCTOS
VALUES (29, 'https://i.pinimg.com/originals/f1/5c/1e/f15c1e7d117243ce7131c0d6ee2b2d22.png', 'Fanta', ' ', 4, 2);

INSERT INTO PRODUCTOS
VALUES (30, 'https://i.pinimg.com/originals/fd/3e/b2/fd3eb2a4255a367bbc21c3fe206312b2.png', 'Agua', ' ', 4, 1);

INSERT INTO PRODUCTOS
VALUES (31, 'https://i.pinimg.com/originals/c2/d2/ac/c2d2ac5d714e3890e2a4e4040672dc1e.png', 'Nestea', ' ', 4, 1);


EXCEPTION

WHEN OTHERS THEN


ROLLBACK;

END;

//CONFIRMACION DE SU CREACION
SELECT * FROM PRODUCTOS;



////////////////////////////////INSERTS EMPLEADOS

BEGIN
INSERT INTO EMPLEADOS
VALUES (1, 'Ava', 'Nightless', 'avanightless@bunmeat.com', '718-555-9001', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (2, 'Liam', 'Black', 'liamblack@bunmeat.com', '718-555-9002', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (3, 'Emma', 'Stone', 'emmastone@bunmeat.com', '718-555-9003', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (4, 'Noah', 'Mason', 'noahmason@bunmeat.com', '718-555-9004', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (5, 'Olivia', 'Johnson', 'oliviajohnson@bunmeat.com', '718-555-9005', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (6, 'William', 'Brown', 'williambrown@bunmeat.com', '718-555-9006', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (7, 'Sophia', 'Garcia', 'sophiagarcia@bunmeat.com', '718-555-9007', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (8, 'James', 'Martinez', 'jamesmartinez@bunmeat.com', '718-555-9008', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (9, 'Mia', 'Davis', 'miadavis@bunmeat.com', '718-555-9009', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (10, 'Benjamin', 'Rodriguez', 'benjaminrodriguez@bunmeat.com', '718-555-9010', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (11, 'John', 'Smith', 'johnsmith@bunmeat.com', '718-555-1001', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (12, 'Emily', 'Johnson', 'emilyjohnson@bunmeat.com', '718-555-1002', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (13, 'Michael', 'Williams', 'michaelwilliams@bunmeat.com', '718-555-1003', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (14, 'Emma', 'Brown', 'emmabrown@bunmeat.com', '718-555-1004', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (15, 'Olivia', 'Jones', 'oliviajones@bunmeat.com', '718-555-1005', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (16, 'William', 'Garcia', 'williamgarcia@bunmeat.com', '718-555-1006', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (17, 'Sophia', 'Miller', 'sophiamiller@bunmeat.com', '718-555-1007', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (18, 'James', 'Martinez', 'jamesmartinez@bunmeat.com', '718-555-1008', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (19, 'Mia', 'Davis', 'miadavis@bunmeat.com', '718-555-1009', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (20, 'Benjamin', 'Rodriguez', 'benjaminrodriguez@bunmeat.com', '718-555-1010', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (21, 'Ava', 'Martinez', 'avamartinez@bunmeat.com', '718-555-1011', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (22, 'Isabella', 'Hernandez', 'isabellahernandez@bunmeat.com', '718-555-1012', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (23, 'Elijah', 'Lopez', 'elijahlopez@bunmeat.com', '718-555-1013', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (24, 'Charlotte', 'Gonzalez', 'charlottegonzalez@bunmeat.com', '718-555-1014', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (25, 'Lucas', 'Wilson', 'lucaswilson@bunmeat.com', '718-555-1015', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (26, 'Amelia', 'Anderson', 'ameliaanderson@bunmeat.com', '718-555-1016', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (27, 'Alexander', 'Thomas', 'alexanderthomas@bunmeat.com', '718-555-1017', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (28, 'Mason', 'Taylor', 'masontaylor@bunmeat.com', '718-555-1018', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (29, 'Evelyn', 'Moore', 'evelynmoore@bunmeat.com', '718-555-1019', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (30, 'Henry', 'Jackson', 'henryjackson@bunmeat.com', '718-555-1020', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (31, 'Harper', 'Martin', 'harpermartin@bunmeat.com', '718-555-1021', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (32, 'Daniel', 'Lee', 'daniellee@bunmeat.com', '718-555-1022', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (33, 'Liam', 'Perez', 'liamperez@bunmeat.com', '718-555-1023', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (34, 'Aria', 'Thompson', 'ariathompson@bunmeat.com', '718-555-1024', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (35, 'Sebastian', 'White', 'sebastianwhite@bunmeat.com', '718-555-1025', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (36, 'Sofia', 'Harris', 'sofiaharris@bunmeat.com', '718-555-1026', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (37, 'David', 'Sanchez', 'davidsanchez@bunmeat.com', '718-555-1027', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (38, 'Ella', 'Clark', 'ellaclark@bunmeat.com', '718-555-1028', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (39, 'Matthew', 'Ramirez', 'matthewr@bunmeat.com', '718-555-1029', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (40, 'Scarlett', 'Lewis', 'scarlettlewis@bunmeat.com', '718-555-1030', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (41, 'Jack', 'Robinson', 'jackrobinson@bunmeat.com', '718-555-1031', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (42, 'Victoria', 'Walker', 'victoriawalker@bunmeat.com', '718-555-1032', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (43, 'Jackson', 'Young', 'jacksonyoung@bunmeat.com', '718-555-1033', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (44, 'Lily', 'Allen', 'lilyallen@bunmeat.com', '718-555-1034', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (45, 'Joseph', 'King', 'josephking@bunmeat.com', '718-555-1035', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (46, 'Zoey', 'Scott', 'zoeyscott@bunmeat.com', '718-555-1036', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (47, 'Gabriel', 'Green', 'gabrielgreen@bunmeat.com', '718-555-1037', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (48, 'Penelope', 'Baker', 'penelopebaker@bunmeat.com', '718-555-1038', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (49, 'Aiden', 'Adams', 'aidenadams@bunmeat.com', '718-555-1039', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (50, 'Riley', 'Rivera', 'rileyrivera@bunmeat.com', '718-555-1040', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (51, 'Carter', 'Nelson', 'carternelson@bunmeat.com', '718-555-1041', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (52, 'Grace', 'Carter', 'gracecarter@bunmeat.com', '718-555-1042', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (53, 'Isaac', 'Mitchell', 'isaacmitchell@bunmeat.com', '718-555-1043', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (54, 'Elizabeth', 'Perez', 'elizabethperez@bunmeat.com', '718-555-1044', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (55, 'Julian', 'Roberts', 'julianroberts@bunmeat.com', '718-555-1045', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (56, 'Hannah', 'Turner', 'hannahturner@bunmeat.com', '718-555-1046', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (57, 'Levi', 'Phillips', 'leviphillips@bunmeat.com', '718-555-1047', 'CE-2', '1234');

INSERT INTO EMPLEADOS
VALUES (58, 'Zoey', 'Campbell', 'zoeycampbell@bunmeat.com', '718-555-1048', 'CE-3', '1234');

INSERT INTO EMPLEADOS
VALUES (59, 'Isaiah', 'Parker', 'isaiahparker@bunmeat.com', '718-555-1049', 'CE-1', '1234');

INSERT INTO EMPLEADOS
VALUES (60, 'Lily', 'Evans', 'lilyevans@bunmeat.com', '718-555-1050', 'CE-2', '1234');


COMMIT;

EXCEPTION

WHEN OTHERS THEN


ROLLBACK;

END;



//CONFIRMACION DE SU CREACION
SELECT * FROM EMPLEADOS;


////////////////////////////////INSERT CLIENTE (PRUEBA)

BEGIN

INSERT INTO CLIENTES
VALUES (1, 'John', 'Smith', 'johnsmith@bunmeat.com', '718-555-1001', 'Calle las gulas','1234');

INSERT INTO CLIENTES
VALUES (2, 'John', 'Smith', 'johnsmith@bunmeat.com', '718-555-1001', 'Calle las gulas','1234');

INSERT INTO CLIENTES
VALUES (3, 'John', 'Smith', 'johnsmith@bunmeat.com', '718-555-1001', 'Calle las gulas','1234');


EXCEPTION

WHEN OTHERS THEN


ROLLBACK;

END;


//CONFIRMACION DE SU CREACION
SELECT * FROM CLIENTES;