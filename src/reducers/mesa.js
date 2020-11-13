import { createReducer } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"
import { mudarEstadoMesa } from "../actions/mesa"

const estadoInicial = {
    mesas: [
        { 'mesa': '1', 'estado': true },
        { 'mesa': '2', 'estado': false },
        { 'mesa': '3', 'estado': false },
        { 'mesa': '4', 'estado': false },
        { 'mesa': '5', 'estado': true },
        { 'mesa': '6', 'estado': false },
        { 'mesa': '7', 'estado': false },
        { 'mesa': '8', 'estado': false },
        { 'mesa': '9', 'estado': false },
        { 'mesa': '10', 'estado': false },
    ]
}

export const reducerMesa = createReducer(estadoInicial, {
    [mudarEstadoMesa]: (state, action) => {
        state.mesas[action.payload-1].estado = !state.mesas[action.payload-1].estado
    }
})