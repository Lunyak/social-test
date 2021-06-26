import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CalculatorState = {
  value: number;
  test: number
}

const initialState: CalculatorState = {
  value: 12340,
  test: 1
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    increment(state: CalculatorState, action: PayloadAction<number>) {
      state.value = state.value + action.payload
    },
    decrement(state: CalculatorState, action: PayloadAction<number>) {
      state.value = state.value - action.payload
    },
    multiply(state: CalculatorState, action: PayloadAction<number>) {
      state.value = state.value * action.payload
    },
    division(state: CalculatorState, action: PayloadAction<number>) {
      if (action.payload === 0) {
        state.value = 0
      } else {
        state.value = state.value / action.payload
      }
    }
  }
})

export const { increment, decrement, multiply, division} = calculatorSlice.actions;
export const { reducer: calculatorReducer } = calculatorSlice;


