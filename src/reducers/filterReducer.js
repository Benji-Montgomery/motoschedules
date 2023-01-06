import { createSlice } from "@reduxjs/toolkit";

const initialState = ['Cascadia_Super_Moto']

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
        },
        setRemoval(state, action){
            const valueToRemove = action.payload
            const filteredState = state.filter(item => item !== valueToRemove)
            return filteredState
        }
    }
})

export const removalFilter = (content) => {
    return (dispatch) => {
        dispatch(setRemoval(content))
    }
}

export const manageFilter = (content) => {
    if(content){return (dispatch) => {
        dispatch(setFilter(content))
    }}else{
        return (dispatch) => {
            dispatch(resetFilter())
        }
    }
}

export const { setFilter, resetFilter, setRemoval } = filterSlice.actions
export default filterSlice.reducer