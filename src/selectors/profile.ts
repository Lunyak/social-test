import {createSelector} from "@reduxjs/toolkit";
import {State} from "../redux";

export const profileSelector = (state: State) => state
export const profileDataSelector = createSelector(profileSelector, data => data.profile)
