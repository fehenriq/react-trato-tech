import { configureStore } from "@reduxjs/toolkit";
import categoriaSlice from "./reducers/categorias";
import itemSlice from "./reducers/itens";

const store = configureStore({
  reducer: {
    categorias: categoriaSlice,
    itens: itemSlice
  }
})

export default store;