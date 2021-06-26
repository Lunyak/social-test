import {createSelector} from "@reduxjs/toolkit";
import {State} from "../redux";

export const statusSelector = (state: State) => state.status

// export const calculatorSelector = (state: State) => state.calculator

// const mindblowSelector = createSelector(statusSelector, calculatorSelector, (status, calculator) => calculator.value > 0 ? status : 'UNSUPPORTED')

export const statusTextSelector = createSelector(statusSelector, el => el.status)
