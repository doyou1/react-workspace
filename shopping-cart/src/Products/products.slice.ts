import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Product {
    title: string;
    price: number;
    id: string;
}

const initialState: Product[] = [
    {title: '롤', price: 15, id: 'aos'},
    {title: '로아', price: 60, id: 'rpg'},
    {title: '롤체', price: 10, id: 'chess'},
]

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            return [action.payload, ...state]
        }
    }
})

export const {addProduct} = productSlice.actions;
export const getProductsSelector = (state: RootState) => state.products;
export default productSlice.reducer;