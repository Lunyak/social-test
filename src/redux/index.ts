import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {calculatorReducer} from "./calculator";
import {StateType} from "typesafe-actions";
import {statusReducer} from "./status";
import {profileReducer} from "./profile";
import {usersReducer} from "./users";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  status: statusReducer,
  profile: profileReducer,
  users: usersReducer
})

export type State = StateType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer
})

// window.store = store;