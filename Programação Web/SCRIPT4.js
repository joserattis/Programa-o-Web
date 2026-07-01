import { createSlice, configureStore } from '@reduxjs/toolkit';

const crudSlice = createSlice({
  name: 'crud',
  initialState: { itens: [] },
  reducers: {
    adicionar: (state, action) => { state.itens.push(action.payload); },
    remover: (state, action) => { state.itens.splice(action.payload, 1); }
  }
});

export const { adicionar, remover } = crudSlice.actions;
export const store = configureStore({ reducer: { crud: crudSlice.reducer } });