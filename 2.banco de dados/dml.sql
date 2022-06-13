USE FastBurguerDB;

-- carga inicial funcionario admin
INSERT INTO tb_funcionario (nm_funcionario, ds_email, ds_senha)
     VALUES ('admin', 'admin2@admin.com.br', '12345');




-- CSU01:: efetuar login
select id_funcionario    id,
       nm_funcionario    nome,
       ds_email           email
  from tb_funcionario
 where ds_email         = 'admin2@admin.com.br'
   and ds_senha            = '12345';




-- CSU02:: cadastrar nova comanda
INSERT INTO tb_comanda (id_funcionario, ds_codigo, nr_mesa, dt_pedido, nr_pessoas, nm_cliente)
     VALUES             (1, 1, 1, '2020-02-11', 5, 'irineu');



-- CSU03:: alterar comanda
UPDATE tb_comanda 
   SET vl_final     = 250,
       ds_pedido    = 'bebidas'
           
 WHERE id_comanda = 1;




-- -- CSU04:: remover comanda
-- DELETE FROM tb_comanda 
--       WHERE id_comanda = 1;




-- -- CSU05:: consultar todos as comandas por codigo
-- SELECT id_comanda        id,
--        vl_final         valor
--        ds_codigo        codigo,
--        nr_mesa          mesa,
--        dt_pedido        data,
--        ds_pedido        descricao,
--        nr_pessoas       quantidade,
--        nm_cliente       nome
--   FROM tb_comanda
--  WHERE ds_codigo        like '%a%';




-- CSU06:: consultar comanda por data
SELECT id_comanda        id,
       vl_final         valor,
       ds_codigo        codigo,
       dt_pedido        data,
       nm_cliente       nome
  FROM tb_comanda
 WHERE dt_pedido        like '%a%';