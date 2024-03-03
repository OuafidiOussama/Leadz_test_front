import {Action, ThunkAction, configureStore} from '@reduxjs/toolkit'
import booksReducer from '../features/Books'
import authorsReducer from '../features/Authors'

export const store = configureStore({
    reducer:{
        books: booksReducer,
        authors: authorsReducer
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

