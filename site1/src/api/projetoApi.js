import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function inserirComanda(nome,quantidade, mesa, codigo, data)  {
    console.log(nome)
    console.log(quantidade)
    console.log(mesa)
    console.log(codigo)
    console.log(data)

    const resposta = await api.post(`/comanda`, {
        nome: nome,
        quantidade: quantidade,
        mesa: mesa,
        codigo: codigo,
        data: data,
        
    })
    return resposta.data;
}

export async function alterarComanda(id,descricao, valor)  {
    const resposta = await api.put(`/comanda/${id}`, {
    
        descricao: descricao,
        valor: valor
    })
    return resposta.data;
}

