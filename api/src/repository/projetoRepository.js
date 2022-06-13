import { con } from './connection.js';



export async function inserirComanda(comanda) {
    const comando=
    `INSERT INTO tb_comanda  (id_funcionario, nm_cliente, nr_pessoas, nr_mesa, ds_codigo, dt_pedido )
                    VALUES (?, ?, ?, ?, ?, ?)`


    const [resposta] = await con.query (comando,[comanda.usuario, comanda.nome, comanda.quantidade, comanda.mesa, comanda.codigo, comanda.data]);
    comanda.id = resposta.insertId;

    return comanda;
}


// export async function buscarPorCodigo(codigo) {
//     const comando =
//         `SELECT id_comanda       id,
//                 nm_cliente       nome,
//                 nr_pessoas       quantidade,
//                 nr_mesa          mesa,
//                 ds_codigo        codigo,
//                 dt_pedido        data,
//                 ds_pedido        descricao,
//                 vl_final         valor
//         FROM tb_comanda
//         WHERE ds_codigo=?` ;

//     const [linhas] = await con.query (comando, [` %${codigo}%`]);
//     return linhas;
// }

export async function buscarPorData(data) {
    const comando =
        `SELECT id_comanda        id,
                nm_cliente       nome,
                ds_codigo        codigo,
                dt_pedido        data,
                vl_final         valor
            FROM tb_comanda
            WHERE dt_pedido  like ?` ;

    const [linhas] = await con.query (comando, [` %${data}%`]);
    return linhas;
}

export async function removerComanda(id) {
    const comando =
        `DELETE FROM tb_comanda 
        WHERE id_comanda = ?` ;

    const [resposta] = await con.query (comando ,[id]);
    return resposta.affectedRows;
}

export async function alterarComanda(id,comanda) {
    const comando=
    `UPDATE tb_comanda 
    SET vl_final     = ?,
        ds_pedido    = ?`
    const [resposta] = await con.query(comando, [comanda.descricao, comanda.valor]);
    return resposta.affectedRows;
}