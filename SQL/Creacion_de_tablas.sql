
CREATE TABLE CATEGORIA_EMPLEADO (
    ID_CATEGORIAEMPLEADO VARCHAR2(4) PRIMARY KEY,
    NOMBRE VARCHAR2(90)
);


CREATE TABLE CATEGORIA_PRODUCTO (
    ID_CATEGORIAPRODUCTO NUMBER(4) PRIMARY KEY,
    NOMBRE VARCHAR2(90)
);

CREATE TABLE CATEGORIA_EMPLEADO (
    ID_CATEGORIAEMPLEADO VARCHAR2(4) PRIMARY KEY,
    NOMBRE VARCHAR2(90)
);

CREATE TABLE CATEGORIA_PRODUCTO (
    ID_CATEGORIAPRODUCTO NUMBER(4) PRIMARY KEY,
    NOMBRE VARCHAR2(90)
);

CREATE TABLE CLIENTES (
    ID_CLIENTE NUMBER(4) PRIMARY KEY,
    NOMBRE VARCHAR2(90),
    APELLIDO VARCHAR2(80),
    GMAIL VARCHAR2(80),
    NUM_TELEFONO VARCHAR2(15),
    DIRECCION VARCHAR2(100)
);

CREATE TABLE EMPLEADOS (
    ID_EMPLEADO NUMBER(4) PRIMARY KEY,
    NOMBRE VARCHAR2(90),
    APELLIDO VARCHAR2(90),
    GMAIL VARCHAR2(90),
    NUM_TELEFONO VARCHAR2(15),
    ID_CATEGORIAEMPLEADO VARCHAR2(4),
    CONSTRAINT fk_empleados_catEmpleado FOREIGN KEY (ID_CATEGORIAEMPLEADO) REFERENCES CATEGORIA_EMPLEADO(ID_CATEGORIAEMPLEADO),
    CONTRASENA VARCHAR2(90)
);


CREATE TABLE PEDIDOS (
    ID_PEDIDO VARCHAR2(90) PRIMARY KEY,
    FECHA DATE,
    ID_EMPLEADO NUMBER(4),
    CONSTRAINT fk_pedidos_empleado FOREIGN KEY (ID_EMPLEADO) REFERENCES EMPLEADOS(ID_EMPLEADO),
    ID_CLIENTE NUMBER(4),
    CONSTRAINT fk_pedidos_cliente FOREIGN KEY (ID_CLIENTE) REFERENCES CLIENTES(ID_CLIENTE)
);

CREATE TABLE PRODUCTOS (
    ID_PRODUCTO NUMBER(4) PRIMARY KEY,
    IMAGEN VARCHAR2(90),
    NOMBRE VARCHAR2(90),
    DESCRIPCION VARCHAR2(90),
    ID_CATEGORIAPRODUCTO NUMBER(4),
    CONSTRAINT fk_producto_catProducto FOREIGN KEY (ID_CATEGORIAPRODUCTO) REFERENCES CATEGORIA_PRODUCTO(ID_CATEGORIAPRODUCTO),
    PRECIO NUMBER(3,2)
);

CREATE TABLE DETALLE (
    ID_DETALLE VARCHAR2(4) PRIMARY KEY,
    CANTIDAD NUMBER(9),
    PRECIO NUMBER(9),
    ID_PEDIDO VARCHAR2(90),
    CONSTRAINT fk_detalle_pedido FOREIGN KEY (ID_PEDIDO) REFERENCES PEDIDOS(ID_PEDIDO),
    ID_PRODUCTO NUMBER(4),
    CONSTRAINT fk_detalle_producto FOREIGN KEY (ID_PRODUCTO) REFERENCES PRODUCTOS(ID_PRODUCTO)
);



// DETALLE
DROP TABLE DETALLE CASCADE CONSTRAINTS;

// PRODUCTOS
DROP TABLE PRODUCTOS CASCADE CONSTRAINTS;

// PEDIDOS
DROP TABLE PEDIDOS CASCADE CONSTRAINTS;

// EMPLEADOS
DROP TABLE EMPLEADOS CASCADE CONSTRAINTS;

// CLIENTES
DROP TABLE CLIENTES CASCADE CONSTRAINTS;

// CATEGORIA_PRODUCTO
DROP TABLE CATEGORIA_PRODUCTO CASCADE CONSTRAINTS;

// CATEGORIA_EMPLEADO
DROP TABLE CATEGORIA_EMPLEADO CASCADE CONSTRAINTS;