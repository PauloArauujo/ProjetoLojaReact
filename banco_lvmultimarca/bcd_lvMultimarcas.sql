
drop database db_lvmultimarca;
create database db_lvmultimarca;

use db_lvmultimarca;

create table clientes (
 idclientes int auto_increment primary key,
 cpf int(11),
 telefone varchar(30),
 email varchar(255)
);
  
create table pedidos (
idpedidos int auto_increment primary key,
idclientes int,
status_pedido varchar(30),
data_pedidos date,
foreign key (idclientes) references clientes(idclientes)
);


create table estoque (
idestoque int auto_increment primary key ,
idpedidos int,
cores varchar(45),
tamanho varchar(20),
marcas varchar(255),
quantidade int,
foreign key (idpedidos) references pedidos(idpedidos)
);

create table avaliacoes (
idavalicoes int auto_increment primary key,
idclientes int,
foreign key (idclientes) references clientes(idclientes)
);

create table camisetas (
 idcamisa int auto_increment primary key,
 precos float,
 codigodebarras int,
 idavaliacoes int,
 vendidas varchar(45),
 idestoque int,
   foreign key (idavaliacoes) references avaliacoes(idavalicoes),
  foreign key (idestoque) references estoque(idestoque)
 );

# foreign key - chave estrangeira
# (NOME) - qual caminho na tabela
# references TABELA (QUAL CHAVE NA TABELA ESTRANGEIRA)

create table vendas (
idvendas int auto_increment primary key,
idpedidos int,
idclientes int,
idroupa int,
quandidade_vendidas int,
data_venda date,
foreign key (idclientes) references clientes(idclientes),
foreign key (idpedidos) references pedidos(idpedidos)
);


show tables;


