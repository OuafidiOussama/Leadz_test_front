import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../store/store'
import { Author } from '../../types/author'

interface AuthorsState {
    authors: Author[],
    author?: Author,
    loading: boolean,
    error?: string | null
}

const initialState:AuthorsState  = {
    authors: [],
    loading: false,
    error: null
}

export const getAuthors = createAsyncThunk(
    'books/getAuthors',
    async () => {
        const res = await axios.get<{"hydra:member":Author[]}>('http://127.0.0.1:8000/api/authors')        
        return res.data['hydra:member']
    } 
)
export const getAuthorById = createAsyncThunk(
    'books/getAuthorById',
    async (authorId:string) => {
        const res = await axios.get<Author>(`http://127.0.0.1:8000/api/authors/${authorId}`)
        return res.data
    } 
)
export const searchByLastName = createAsyncThunk(
    'books/searchByLastName',
    async (lastName:string) => {
        const res = await axios.get<{"hydra:member":Author[]}>(`http://127.0.0.1:8000/api/authors?lastName=${lastName}`)
        return res.data['hydra:member']
    }
)

const AuthorsSlice = createSlice({
    name : 'authors',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getAuthors.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(getAuthors.fulfilled, (state, action)=>{
            state.loading = false
            state.authors = action.payload
        })
        builder.addCase(getAuthors.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message
        })
        builder.addCase(getAuthorById.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(getAuthorById.fulfilled, (state, action)=>{
            state.loading = false
            state.author = action.payload
        })
        builder.addCase(getAuthorById.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message
        })
        builder.addCase(searchByLastName.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(searchByLastName.fulfilled, (state, action)=>{
            state.loading = false
            state.authors = action.payload
        })
        builder.addCase(searchByLastName.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message
        })
    } 
})

export const selectAllAuthors = (state:RootState) => state.authors.authors
export const selectAuthorById = (state:RootState) => state.authors.author
export const selectAllBooks = (state:RootState) => state.authors.author?.books

const authorsReducer = AuthorsSlice.reducer

export default authorsReducer