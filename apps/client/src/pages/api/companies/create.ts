import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import { companies } from '../services';
import { Company, InputCompany } from '@/types';

export default async function getCompanies(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const companyData = req.body as InputCompany;

  try {
    const result = await axios.post<Company | null>(companies(), companyData);

    res.status(result.status).send(result.data);
  } catch (err) {
    console.log('err', err);
  }
}
