import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        number: 0,
    },
    reducers: {
        increment: (state) => {
            state.number += 1
        },

        decrement: (state, action) => {
            console.log(action)
            state.number -= action.payload
        }
    }
})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer
