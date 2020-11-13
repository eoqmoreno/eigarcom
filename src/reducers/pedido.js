import { createReducer } from "@reduxjs/toolkit"
import { limparPedidoMesa } from "../actions/pedido"

const estadoInicial = {
    pedidos: [
        { 'mesa': 1,
        'pedidos': [
            {'qtd': 1, 'produto': 'Baião', 'preco': '10.00', 'obs': 'Sem verdura'},
            {'qtd': 1, 'produto': 'Batata frita', 'preco': '10.00'},
            {'qtd': 1, 'produto': 'Linguiça', 'preco': '5.00'}
        ] },
        { 'mesa': 5,
        'pedidos': [
            {'qtd': 1, 'produto': 'Baião de dois', 'preco': '10.00', 'obs': 'Sem verdura'},
            {'qtd': 1, 'produto': 'Batata canoa', 'preco': '10.00'},
            {'qtd': 1, 'produto': 'Linguiça', 'preco': '5.00'}
        ] },
    ]
}

export const reducerPedido = createReducer(estadoInicial, {
    [limparPedidoMesa]: (state, action) => {
        state.pedidos.map((busca, index) => {
            if(busca.mesa == action.payload){
            return state.pedidos.splice(index,1)
            }
        })
    }
})