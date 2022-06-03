CREATE DATABASE FastBurguerDB;
DROP DATABASE FastBurguerDB;

USE FastBurguerDB;

CREATE TABLE tb_funcionario(
    id_funcionario       int primary key auto_increment,
    nm_funcionario       varchar(200),
    ds_email             varchar(200),
    ds_senha             varchar(20)
);
CREATE TABLE tb_comanda(
    id_comanda          int primary key auto_increment,
    id_funcionario      int,
    vl_final            decimal(15,2),
    ds_codigo           decimal(15,2),
    nr_mesa             int,
    dt_pedido           datetime,
    ds_pedido           varchar(15000),
    nr_pessoas          int,
    nm_pessoas          varchar(200)
    FOREIGN KEY (id_funcionario) REFERENCES tb_funcionario(id_funcionario)
);