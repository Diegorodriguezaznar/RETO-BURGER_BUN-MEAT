////////////////////////////////////////////////////////CREACION DE TABLAS EN SQL


/////////////////////////////////////CATEGORIA_EMPLEADO

create table CATEGORIA_EMPLEADO(
ID_CATEGORIAEMPLEADO varchar2(90)primary key,
NOMBRE varchar2(90)
);



/////////////////////////////////////CATEGORIA_PRODUCTO

create table CATEGORIA_PRODUCTO(
ID_CATEGORIAPRODUCTO varchar2(4)primary key,
NOMBRE varchar2(90)
);


/////////////////////////////////////CLIENTES

create table CLIENTES(
ID_CLIENTE varchar2(4) primary key,
NOMBRE varchar2(90),
APELLIDO varchar2(80),
GMAIL varchar2(80),
NUM_TELEFONO varchar2(15),
DIRECCION varchar2(100)
);


/////////////////////////////////////EMPLEADOS

create table EMPLEADOS(
ID_EMPLEADO varchar2(90) primary key,
NOMBRE varchar2(90),
APELLIDO varchar2(90),
GMAIL varchar2(90),
NUM_TELEFONO varchar2(15),
ID_CATEGORIAEMPLEADO varchar2(90),
constraint fk_empleados_catEmpleado foreign key (ID_CATEGORIAEMPLEADO) references CATEGORIA_EMPLEADO (ID_CATEGORIAEMPLEADO)
);



/////////////////////////////////////PEDIDOS

create table PEDIDOS(
ID_PEDIDO varchar2(90)primary key,
FECHA date,
ID_EMPLEADO varchar2(90),
constraint fk_pedidos_empleado foreign key (ID_EMPLEADO) references EMPLEADOS (ID_EMPLEADO),
ID_CLIENTE varchar2(90),
constraint fk_pedidos_cliente foreign key (ID_CLIENTE) references CLIENTES (ID_CLIENTE)
);



/////////////////////////////////////PRODUCTOS

create table PRODUCTOS(
ID_PRODUCTO varchar2(4)primary key,
IMAGEN varchar2(90),
NOMBRE varchar2(90),
DESCRIPCION varchar2(90),
ID_CATEGORIAPRODUCTO varchar2(90),
constraint fk_producto_catProducto foreign key (ID_CATEGORIAPRODUCTO) references CATEGORIA_PRODUCTO (ID_CATEGORIAPRODUCTO),
PRECIO NUMBER(3,2)
);

/////////////////////////////////////DETALLE

create table DETALLE(
ID_DETALLE varchar2(4) primary key,
CANTIDAD numeric(9),
PRECIO numeric(9),
ID_PEDIDO varchar2(90),
constraint fk_detalle_pedido foreign key (ID_PEDIDO) references Pedidos (ID_PEDIDO),
ID_PRODUCTO varchar2(4),
constraint fk_detalle_producto foreign key (ID_PRODUCTO) references Productos (ID_PRODUCTO)
);

