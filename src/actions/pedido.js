import { createAction } from "@reduxjs/toolkit";

export const limparPedidoMesa = createAction("LIMPAR_PEDIDO");

export const limparPedidos = (id) => {
    return (dispatch, getState) => {
        dispatch(limparPedidoMesa(id))
    }
}