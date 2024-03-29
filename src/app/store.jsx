import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slice/SliderSlice";
import filteredReducer from "../features/slice/filteredslice";
import cartReducer from '../features/slice/cartslice'
import authReducer from '../features/slice/authslice'

export const store = configureStore({
    reducer: {
        slider: sliderReducer,
        filtered: filteredReducer,
        cart: cartReducer,
        auth: authReducer,
    }
})