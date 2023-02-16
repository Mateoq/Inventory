import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { InputLogin, LoginResult } from '@/types';
import { apiServices } from '@/constants';

const login = createAsyncThunk<LoginResult, InputLogin>(
  'company/create',
  async (data: InputLogin) => {
    const response = await axios.post(apiServices.login, data);
    return response.data;
  }
);

export default login;
