import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { Book } from '../../types/book'
import axios from 'axios'
import { RootState } from '../store/store'

interface BooksState {
    books: Book[],
    book?: Book,
    loading: boolean,
    error?: string | null
}

const initialState:BooksState  = {
    books: [],
    loading: false,
    error: null
}

export const getBooks = createAsyncThunk(
    'books/getBooks',
    async () => {
        const res = await axios.get<{"hydra:member":Book[]}>('http://127.0.0.1:8000/api/books')        
        return res.data['hydra:member']
    } 
)
export const getBookById = createAsyncThunk(
    'books/getBookById',
    async (bookId:string) => {
        const res = await axios.get<Book>(`http://127.0.0.1:8000/api/books/${bookId}`)
        return res.data
    } 
)
export const searchByTitle = createAsyncThunk(
    'books/searchByTitle',
    async (title:string) => {
        const res = await axios.get<{"hydra:member":Book[]}>(`http://127.0.0.1:8000/api/books?title=${title}`)
        return res.data['hydra:member']
    }
)

const BooksSlice = createSlice({
    name : 'books',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getBooks.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(getBooks.fulfilled, (state, action)=>{
            state.loading = false
            state.books = action.payload
        })
        builder.addCase(getBooks.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message
        })
        builder.addCase(getBookById.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(getBookById.fulfilled, (state, action)=>{
            state.loading = false
            state.book = action.payload
        })
        builder.addCase(getBookById.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message
        })
        builder.addCase(searchByTitle.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(searchByTitle.fulfilled, (state, action)=>{
            state.loading = false
            state.books = action.payload
        })
        builder.addCase(searchByTitle.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message
        })
    } 
})

export const selectAllBooks = (state:RootState) => state.books.books
export const selectBookById = (state:RootState) => state.books.book
export const selectAllReviews = (state:RootState) => state.books.book?.reviews

const booksReducer = BooksSlice.reducer

export default booksReducer