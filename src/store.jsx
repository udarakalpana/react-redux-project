import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './utlities/counterSlice.jsx'

export default configureStore({
    reducer: {
        counter: counterReducer
    },
})