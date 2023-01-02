import { createSlice } from "@reduxjs/toolkit"

const initialState = 'none'

const mapSlice = createSlice({
    name: 'infoMap',
    initialState,
    reducers:{
        show(){
            return 'visible'
        },
        hide(){
            return 'none'
        }
    }
})

export const showInfo = () => {
    return (dispatch) => {
        dispatch(show())
    }
}

export const hideInfo = () => {
    return (dispatch) => {
        dispatch(hide())
    }
}


export const { show, hide } = mapSlice.actions
export default mapSlice.reducer