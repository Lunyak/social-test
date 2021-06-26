import {createSelector} from "@reduxjs/toolkit";
import {State} from "../redux";

export const calculatorSelector = (state: State) => state.calculator

export const valueSelector = createSelector(calculatorSelector, calculator => calculator.value)
export const testSelector = createSelector(calculatorSelector, calculator => calculator.test)

