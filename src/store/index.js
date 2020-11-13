import { reducerPedido } from "../reducers/pedido";

const { configureStore } = require("@reduxjs/toolkit");
const { reducerMesa } = require("../reducers/mesa");

const store = configureStore({
    reducer:{
        mesa: reducerMesa,
        pedido:reducerPedido,
    }
})

export default store;