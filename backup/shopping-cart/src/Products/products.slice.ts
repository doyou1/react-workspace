import { createAsyncThunk, createSlice, PayloadAction, createEntityAdapter } from "@reduxjs/toolkit";
import validateProduct from "../fake.api";
import { RootState } from "../store";

export interface Product {
    title: string;
    price: number;
    id: string;
}

export enum ValidationState {
    Fulfilled,
    Pending,
    Rejected
}

interface ProductsSliceState {
    validationState?: ValidationState,
    errorMessage?: string
}

export const addProductAsync = createAsyncThunk('products/addNewProduct', async (initialProduct: Product) => {
    const product = await validateProduct(initialProduct);
    return product;
})

const initialProducts: Product[] = [
    {title: '롤', price: 15, id: 'aos'},
    {title: '로아', price: 60, id: 'rpg'},
    {title: '롤체', price: 10, id: 'chess'},
]

const productAdapter = createEntityAdapter<Product>()
const initialState = productAdapter.getInitialState<ProductsSliceState>({
    errorMessage: undefined,
    validationState: undefined
})

const filledInitialState = productAdapter.upsertMany(initialState, initialProducts)

const productSlice = createSlice({
    name: 'products',
    initialState: filledInitialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            productAdapter.upsertOne(state, action.payload)
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            productAdapter.removeOne(state, action.payload)
        }
    },
    extraReducers: builder => {
        builder.addCase(addProductAsync.fulfilled, (state, action) => {
            productAdapter.upsertOne(state, action.payload)
            state.validationState = ValidationState.Fulfilled
            state.errorMessage = undefined 
        })
        builder.addCase(addProductAsync.rejected, (state, action) => ({
            ...state,
            validationState: ValidationState.Rejected,
            errorMessage: action.error.message
        }))
        builder.addCase(addProductAsync.pending, (state, action) => ({
            ...state,
            validationState: ValidationState.Pending,
            errorMessage: undefined
        }))
    }
})

export const {addProduct, removeProduct} = productSlice.actions;
export const getProductsSelector = (state: RootState) => state.products.entities;
export const getErrorMessage = (state: RootState) => state.products.errorMessage;
export const {
    selectAll: selectAllProducts,
    selectById: selectProductById,
    selectEntities: selectProductEntities,
    selectIds: selectProductIds,
    selectTotal: selectTotalProducts
} = productAdapter.getSelectors<RootState>(state => state.products)
export default productSlice.reducer;