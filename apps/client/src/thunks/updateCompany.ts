import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { UpdateCompany } from '@/types';
import { apiServices } from '@/constants';

const updateCompany = createAsyncThunk(
  'company/update',
  async (data: UpdateCompany) => {
    const response = await axios.post(apiServices.updateCompany, data);
    return response.data;
  }
);

export default updateCompany;
