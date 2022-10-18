import { configureStore } from "@reduxjs/toolkit";
import categoriaSlice from "./reducers/categorias";
import itemSlice from "./reducers/itens";
import carrinhoSlice from './reducers/carrinho'

const store = configureStore({
  reducer: {
    categorias: categoriaSlice,
    itens: itemSlice,
    carrinho: carrinhoSlice,
  }
})

export default store;