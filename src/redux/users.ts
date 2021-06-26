import {ActionError, User} from "../type/types";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fakeApi} from "../api/api";

type UsersState = {
  data: User[]
  pending: boolean
  onlineUsers: User[]
  error: Error | null
}

const initialState: UsersState = {
  data: [],
  pending: false,
  onlineUsers: [],
  error: null
}

export const getUsers = createAsyncThunk(
  'getUsers',
  async () => {
    const result = await  fakeApi('/users')
    return result
  }
)

export const usersSlince = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateUsers( state: UsersState, action: PayloadAction<User[]>) {
      state.onlineUsers = action.payload
    }
  },
  extraReducers: {
    [getUsers.pending.toString()]: (state: UsersState) => {
      state.pending = true
    },
    [getUsers.fulfilled.toString()]: (state: UsersState,  action: PayloadAction<User[]>) => {
      state.pending = false
      state.data = action.payload
    },
    [getUsers.rejected.toString()]: (state: UsersState, action: ActionError) => {
      state.pending = false
      state.error = action.error
    }
  }
})

export const { updateUsers } = usersSlince.actions;
export const { reducer: usersReducer } = usersSlince;