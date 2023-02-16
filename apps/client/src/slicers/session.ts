import {
  PayloadAction,
  createSlice
} from '@reduxjs/toolkit';

import { GlobalState, SessionState } from '@/types';
import { slicerNames } from '@/constants';

const sessionSlice = createSlice({
  name: slicerNames.SESSION,
  initialState: {
    email: null
  },
  reducers: {
    setSession: (state: SessionState, action: PayloadAction<string>) => {
      const { payload: email } = action;
      state.email = email;
    },
    closeSession: (state: SessionState) => {
      state.email = null;
    }
  }
});

const { setSession, closeSession } = sessionSlice.actions;

const selectSessionEmail = (state: GlobalState) => (state.session.email);

const sessionReducer = sessionSlice.reducer;

export {
  sessionReducer,
  setSession,
  closeSession,
  selectSessionEmail
};
