import { createSlice } from "@reduxjs/toolkit";

const initialState = ['MYCLAROVOIANTPANTSAREONFIRE']

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        setFilter(state, action){
            const filter = action.payload
            return [...state, filter]
        },
        resetFilter(){
            return ['MYCLAROVOIANTPANTSAREONFIRE']
        }
    }
})

export const manageFilter = (content) => {
    if(content){return (dispatch) => {
        dispatch(setFilter(content))
    }}else{
        return (dispatch) => {
            dispatch(resetFilter())
        }
    }
}

export const { setFilter, resetFilter } = filterSlice.actions
export default filterSlice.reducer