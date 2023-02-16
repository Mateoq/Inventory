import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { DeleteCompany } from '@/types';
import { apiServices } from '@/constants';

const deleteCompany = createAsyncThunk(
  'company/delete',
  async (data: DeleteCompany) => {
    const response = await axios.post(apiServices.deleteCompany, data);
    return response.data;
  }
);

export default deleteCompany;
