import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        genres: {},
    },
    reducers: {
        // getApiConfiguration: (state, action) => {
        //     state.url = action.payload
        // },
        getGenres(state, action) {
            state.genres = action.payload
        }
    }
})
export const { getGenres } = homeSlice.actions
export default homeSlice.reducer