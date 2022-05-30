import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    origin:null,
    destination:null,
    traverTimeInformation:null,
};

export const navSlice = createSlice({
    name:'nav',
    initialState,
    reducer:{
        origin: (state,action) => {
            state.origin = action.payload;
        },
        destination:(state,action) => {
            state.destination = action.payload;
        },
        traverTimeInformation:(state,action) => {
            state.traverTimeInformation = action.payload;
        }
    }
});


const {setOrigin,setDestination,setTraverTimeInformation} = navSlice.actions;

export const selectOrigin = state => state.nav.origin;
export const selectDestination = state => state.nav.destination;
export const selectTraverTimeInformation = state => state.nav.traverTimeInformation;


export default navSlice.reducer;