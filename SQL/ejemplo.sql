create table Clientes(
id_cliente varchar2(90) primary key,
Nombre varchar2(90),
Apellido varchar2(90),
gmail varchar2(90),
num_telefono varchar2(15),
Direccion varchar2(100)
);

create table Categoria_empleado(
id_categoriaEmpleado varchar2(90)primary key,
Nombre varchar2(90)
);

create table Empleados(
id_empleado varchar2(90) primary key,
Nombre varchar2(90),
Apellido varchar2(90),
gmail varchar2(90),
num_telefono varchar2(15),
id_categoriaEmpleado varchar2(90),
constraint fk_empleados_catEmpleado foreign key (id_categoriaEmpleado) references Categoria_empleado (id_categoriaEmpleado)
);

create table Pedidos(
id_pedido varchar2(90)primary key,
fecha_hora date,
id_empleado varchar2(90),
constraint fk_pedidos_empleado foreign key (id_empleado) references Empleados (id_empleado),
id_cliente varchar2(90),
constraint fk_pedidos_cliente foreign key (id_cliente) references Clientes (id_cliente)
);

create table Categoria_producto(
id_categoriaProducto varchar2(90)primary key,
Nombre varchar2(90)
);

create table Productos(
id_producto varchar2(90)primary key,
imagen varchar2(90),
nombre varchar2(90),
precio varchar2(90),
descripcion varchar2(90),
id_categoriaProducto varchar2(90),
constraint fk_producto_catProducto foreign key (id_categoriaProducto) references Categoria_producto (id_categoriaProducto)
);

create table Detalle(
id_detalle varchar2(90) primary key,
cantidad numeric(9),
precio numeric(9),
id_pedido varchar2(90),
constraint fk_detalle_pedido foreign key (id_pedido) references Pedidos (id_pedido),
id_producto varchar2(90),
constraint fk_detalle_producto foreign key (id_producto) references Productos (id_producto)
);

--RELLENAR TABLA PRODUCTOS
insert into Productos(id_producto, imagen, nombre, precio, descripcion)
values ('H-01','imagen1.png','Meat_Ternera','11,99','Hamburguesa de carne con tres quesos');

insert into Productos(id_producto, imagen, nombre, precio, descripcion)
values ('H-02','imagen2.png','Meat_Ternera_Complete','10,99','Hamburguesa de carne con queso y bacon');

insert into Productos(id_producto, imagen, nombre, precio, descripcion)
values ('H-03','imagen3.png','Meat_Ternera_Smash','11,99','Hamburguesa de carne con res quesos');

insert into Productos(id_producto, imagen, nombre, precio, descripcion)
values ('H-04','imagen4.png','Meat_Vacuno','9,99','Hamburguesa de pollo con lechuga, queso y salsa deluxe');

insert into Productos(id_producto, imagen, nombre, precio, descripcion)
values ('H-05','imagen5.png','Meat_Vacuno_Complete','15,99','Hamburguesa con dos carnes, queso, salsa ranchera y cebolla caramelizada');

insert into Productos(id_producto, imagen, nombre, precio, descripcion)
values ('H-06','imagen6.png','Meat_Vacuno_Smash','9,99','Hamburguesa de Pulpo, con lechuga, salsa ranchera y toque de limon');

--RELLENAR TABLA EMPLEADOS

insert into Empleados(id_empleado, Nombre, Apellido, gmail, num_telefono)
values ('EM-01', 'John', 'Taylor Michels', 'johntaylor@gmail.com', '212-555-9489');

insert into Empleados(id_empleado, Nombre, Apellido, gmail, num_telefono)
values ('EM-02', 'Jessica', 'Miller', 'jessicamiller@gmail.com', '646-555-7891');

insert into Empleados(id_empleado, Nombre, Apellido, gmail, num_telefono)
values ('EM-03', 'Michael', 'Brown', 'michaelbrown@gmail.com', '718-555-2345');

insert into Empleados(id_empleado, Nombre, Apellido, gmail, num_telefono)
values ('EM-04', 'Emily', 'Davis', 'emilydavis@gmail.com', '917-555-8765');

insert into Empleados(id_empleado, Nombre, Apellido, gmail, num_telefono)
values ('EM-05', 'Daniel', 'Johnson', 'danieljohnson@gmail.com', '917-555-3456');

insert into Empleados(id_empleado, Nombre, Apellido, gmail, num_telefono)
values ('EM-06', 'Olivia', 'Wilson', 'oliviawilson@gmail.com', '646-555-1234');

insert into Empleados(id_empleado, Nombre, Apellido, gmail, num_telefono)
values ('EM-07', 'William', 'Garcia', 'williamgarcia@gmail.com', '718-555-6789');

insert into Empleados(id_empleado, Nombre, Apellido, gmail, num_telefono)
values ('EM-08', 'Sophia', 'Anderson', 'sophiaanderson@gmail.com', '212-555-5678');

insert into Empleados(id_empleado, Nombre, Apellido, gmail, num_telefono)
values ('EM-09', 'Ethan', 'Martinez', 'ethanmartinez@gmail.com', '917-555-4321');

insert into Empleados(id_empleado, Nombre, Apellido, gmail, num_telefono)
values ('EM-10', 'Ava', 'Lopez', 'avalopez@gmail.com', '718-555-9012');

--RELLENAR TABLA CLIENTES

insert into Clientes(id_cliente, Nombre, Apellido, gmail, num_telefono, Direccion)
values ('CL-01','Michael','Jhonson James','michaeljjames@gmail.com','917-555-4321','Daniels-Street-16');

insert into Clientes(id_cliente, Nombre, Apellido, gmail, num_telefono, Direccion)
values ('CL-02', 'Sarah', 'Smith', 'sarahsmith@gmail.com', '646-555-7890', 'Broadway-Avenue-22');

insert into Clientes(id_cliente, Nombre, Apellido, gmail, num_telefono, Direccion)
values ('CL-03', 'David', 'Miller', 'davidmiller@gmail.com', '718-555-1234', 'Madison-Avenue-45');

insert into Clientes(id_cliente, Nombre, Apellido, gmail, num_telefono, Direccion)
values ('CL-04', 'Emily', 'Davis', 'emilydavis@gmail.com', '212-555-5678', 'Park-Street-7');

insert into Clientes(id_cliente, Nombre, Apellido, gmail, num_telefono, Direccion)
values ('CL-05', 'Daniel', 'Brown', 'danielbrown@gmail.com', '917-555-9876', 'Lexington-Avenue-32');

insert into Clientes(id_cliente, Nombre, Apellido, gmail, num_telefono, Direccion)
values ('CL-06', 'Olivia', 'Wilson', 'oliviawilson@gmail.com', '646-555-2468', 'Central-Park-Street-12');

insert into Clientes(id_cliente, Nombre, Apellido, gmail, num_telefono, Direccion)
values ('CL-07', 'William', 'Taylor', 'williamtaylor@gmail.com', '718-555-3456', 'Fifth-Avenue-8');

insert into Clientes(id_cliente, Nombre, Apellido, gmail, num_telefono, Direccion)
values ('CL-08', 'Sophia', 'Anderson', 'sophiaanderson@gmail.com', '212-555-9012', 'Times-Square-10');