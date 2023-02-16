import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { apiServices } from '@/constants';

const logout = createAsyncThunk(
  'company/create',
  async () => {
    const response = await axios.post(apiServices.logout);
    return response.data;
  }
);

export default logout;
