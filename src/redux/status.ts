import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type StatusState = {
  status: string;
}

const initialState: StatusState = {
  status: 'Ваш статус',
}

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    getStatus(state: StatusState, action: PayloadAction<string>) {
      state.status = action.payload
    }
  }
})

export const { getStatus } = statusSlice.actions;
export const { reducer: statusReducer } = statusSlice;


