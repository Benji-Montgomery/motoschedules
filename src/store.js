import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterReducer";
import infoReducer from "./reducers/infoReducer"

const store =  configureStore({
    reducer: {
        filter: filterReducer,
        infoDisplay: infoReducer

    }
})

export default store