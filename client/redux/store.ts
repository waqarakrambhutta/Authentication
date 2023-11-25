import { configureStore } from "@reduxjs/toolkit";
import App from "next/app";
import authReducer from "./features/authSlice";

export const makeStore = () =>
    configureStore({
        reducer: {
            authReducer
        },
        devTools: process.env.NODE_ENV !== "production"
    })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
