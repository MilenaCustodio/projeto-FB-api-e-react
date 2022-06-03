import {con} from './connection.js'

export async function login (email, senha) {


     const comando = 
        `select id_funcionario    id,
                nm_funcionario    nome,
                ds_email          email
            from tb_funcionario
            where ds_email         = ?
            and ds_senha           = ?`
    const [linhas] = await con.query (comando, [email, senha])

    console.log(linhas);
    return linhas [0]; 
}