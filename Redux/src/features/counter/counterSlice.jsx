import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

//creating slice
export const counterSlice = createSlice({
  name: 'counter',
  //initializing count
  initialState:{
   value:0
  },
  //Actions are added here - Increment,decrement and incrementByAmount are actions

  reducers: {
    increment: (state) => {

      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload)
    },
    reset: (state) => {
        state.value = initialState.value
      },
  },
})


export const { increment, decrement, incrementByAmount,reset } = counterSlice.actions

//exporting the actions in reducer to register it in the store so that store ko pata lage ki iss type ka action aya toh kisko dena hain

//agar store ke pass counter wala reducer register hi nahi hota toh store kabhi bhi increment wala action counterSlice ko nahi de pata

export default counterSlice.reducer