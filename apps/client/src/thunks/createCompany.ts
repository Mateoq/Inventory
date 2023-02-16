import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { InputCompany } from '@/types';
import { apiServices } from '@/constants';

const createCompany = createAsyncThunk(
  'company/create',
  async (data: InputCompany) => {
    const response = await axios.post(apiServices.createCompany, data);
    return response.data;
  }
);

export default createCompany;
