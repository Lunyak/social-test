import { createSelector } from "@reduxjs/toolkit";
import {State} from "../redux";

export const usersSelector = (state: State) => state.users;
export const usersDataSelector = createSelector(usersSelector, users => users.data)
