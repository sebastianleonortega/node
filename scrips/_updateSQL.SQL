
-- crear tabla de producto
CREATE TABLE producto(
     id_producto serial,
         nombre varchar(4000),
         detalle varchar(4000),
         valor numeric,
         img varchar(4000),
         CONSTRAINT pk_id_producto primary key (id_producto)
     );

-- poblar tabla de producto

INSERT INTO producto (nombre, detalle, valor, img) VALUES
                                                       ('Laptop HP Pavilion', 'Laptop HP Pavilion con procesador Intel Core i7, 16GB RAM, 512GB SSD', 1200.00, 'https://d34vmoxq6ylzee.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/3/0/308Z1LA-1_T1679063065.png'),
                                                       ('Smartphone Samsung Galaxy S21', 'Smartphone Samsung Galaxy S21 con 128GB de almacenamiento y 8GB RAM', 799.99, 'https://exitocol.vtexassets.com/arquivos/ids/19488387/celular-samsung-galaxy-s21-5g-128-gb-phantom-gray-refurbi-reacondicionado.jpg'),
                                                       ('Smart TV LG OLED', 'Smart TV LG OLED de 55 pulgadas con resolución 4K y HDR', 1500.00, 'https://www.lg.com/content/dam/channel/wcms/co/images/televisores/oled55a1psa_awc_escb_co_c/gallery/d-1.jpg'),
                                                       ('Consola PlayStation 5', 'Consola de videojuegos PlayStation 5 con 1TB de almacenamiento', 499.99, 'https://cosonyb2c.vtexassets.com/arquivos/ids/357735/PS5_BNDL_EAFC24_GMEDLC_DLC_RNDR_LT_PROD_RGB_LA_230728.jpg'),
                                                       ('Audífonos Bose QuietComfort', 'Audífonos inalámbricos Bose QuietComfort con cancelación de ruido', 299.99, 'https://www.audiocolor.co/wp-content/uploads/2023/06/AUDIFONO-BOSE-QUIETCOMFORT-EARBUDS-NEGRO-2.jpeg'),
                                                       ('Cámara Canon EOS R6', 'Cámara mirrorless Canon EOS R6 con sensor de 20MP y grabación 4K', 2499.00, 'https://importacionesarturia.com/wp-content/uploads/2023/06/Canon-EOS-R6-Mark-II-1.jpeg'),
                                                       ('Reloj Inteligente Apple Watch Series 6', 'Reloj inteligente Apple Watch Series 6 con GPS y monitor de salud', 399.00, 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series-6-stainless-steel-gold-case_09152020_inline.jpg.large.jpg'),
                                                       ('Parlante JBL Charge 4', 'Parlante portátil JBL Charge 4 con batería de 20 horas y resistencia al agua', 149.95, 'https://mac-center.com/cdn/shop/products/unnamed_1da964b6-43f3-4702-86bb-06f34039a959.jpg'),
                                                       ('Laptop Dell XPS 13', 'Laptop Dell XPS 13 con procesador Intel Core i5, 8GB RAM, 256GB SSD', 999.99, 'https://m.media-amazon.com/images/I/710EGJBdIML._AC_SL1500_.jpg');

-- crear tabla de usuario
 CREATE TABLE USUARIO (
     ID SERIAL,
     USERNAME VARCHAR(200),
     PASSWORD VARCHAR(200),
     CONSTRAINT PK_USUARIO PRIMARY KEY (ID, USERNAME)
     )

-- poblar tabla de usuario
INSERT INTO USUARIO (USERNAME, PASSWORD) VALUES
        ('sebastian', 'password123'),
        ('diany', 'securepassword');
