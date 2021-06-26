import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fakeApi} from "../api/api";
import {ActionError} from "../type/types";

const photo = 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/3f/%D0%93%D1%83%D0%B1%D0%BA%D0%B0_%D0%91%D0%BE%D0%B1_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6.png/274px-%D0%93%D1%83%D0%B1%D0%BA%D0%B0_%D0%91%D0%BE%D0%B1_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6.png'

type ProfileState = {
  pending: boolean;
  isOnline: boolean;
  error: Error | null
  id: number | null
  nickName: string | null
  firstName: string | null
  secondName: string | null
  local: string | null
  photo: string | null
}

const initialState: ProfileState = {
  pending: false,
  isOnline: false,
  error: null,
  id: 1,
  nickName: 'Губка',
  firstName: 'Боб',
  secondName: 'Квадратные штаны',
  local: 'Лагуна Парк',
  photo
}

export const getUserInfo = createAsyncThunk(
  'getUserInfo',
  async (id: string) => {

    const result = await fakeApi('/profile' )
    // console.log(result)
    // throw new Error;
    return result;
  }
)

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateOnlineStatus(state: ProfileState, action: PayloadAction<boolean>) {
      state.isOnline = action.payload
    }
  },
  extraReducers: {
    [getUserInfo.pending.toString()]: (state: ProfileState) => {
       state.pending = true;
    },
    [getUserInfo.fulfilled.toString()]: (state: ProfileState, action: PayloadAction<{ id: string, name: string }>) => {
      state.pending = false;
      // state.id = action.payload.id
      // state.name = action.payload.name
    },
    [getUserInfo.rejected.toString()]: (state: ProfileState, action: ActionError) => {
      state.pending = false;
      state.error = action.error;
    }
  }
})

export const { updateOnlineStatus } = profileSlice.actions;
export const { reducer: profileReducer } = profileSlice;


