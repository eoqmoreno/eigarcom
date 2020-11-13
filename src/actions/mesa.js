import { createAction } from "@reduxjs/toolkit";

export const mudarEstadoMesa = createAction("MUDAR_ESTADO_MESA");

export const mudarEstado = (id) => {
    return (dispatch, getState) => {
        dispatch(mudarEstadoMesa(id))
    }
}