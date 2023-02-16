import {
  PayloadAction,
  createSlice
} from '@reduxjs/toolkit';

import { GlobalState, ToastState } from '@/types';
import { slicerNames } from '@/constants';

const toastSlice = createSlice({
  name: slicerNames.TOAST,
  initialState: {
    message: '',
    isOpen: false
  },
  reducers: {
    openToast: (state: ToastState, action: PayloadAction<string>) => {
      const { payload: message } = action;
      state.message = message;
      state.isOpen = true;
    },
    closeToast: (state: ToastState) => {
      state.message = '';
      state.isOpen = false;
    }
  }
});

const { openToast, closeToast } = toastSlice.actions;

const selectToastMessage = (state: GlobalState) => (state.toast.message);

const selectIsToastOpen = (state: GlobalState) => (state.toast.isOpen);

const toastReducer = toastSlice.reducer;

export {
  toastReducer,
  openToast,
  closeToast,
  selectToastMessage,
  selectIsToastOpen
};
