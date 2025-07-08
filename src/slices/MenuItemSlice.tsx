import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuItem } from '../entities/MenuItem';

const initialState: MenuItem[] = [
    {
        id: 1,
        name: "Hamburguesa de Pollo",
        quantity: 40,
        desc: "Esto es una haburguesa de pollo",
        price: 12,
        image: "hamburguesa.jpg",
    },
    {
        id: 2,
        name: "Pizza de cuatro quesos",
        quantity: 25,
        desc: "Esta es la mejor pizza del mundo",
        price: 15,
        image: "pizza.jpg",
    },
    {
        id: 3,
        name: "Ensalada",
        quantity: 30,
        desc: "Ensalada con ingredientes naturales",
        price: 7,
        image: "ensalada.jpeg",
    },
    {
        id: 4,
        name: "Bocadillo",
        quantity: 35,
        desc: "El bocata de la tía Paca",
        price: 5,
        image: "bocadillo.jpg",
    },
];

const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        addFood: (state, action: PayloadAction<MenuItem>) => {
            state.push(action.payload);
        },
    },
});

export const { addFood } = foodSlice.actions;

export const store = configureStore({
    reducer: {
        food: foodSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;