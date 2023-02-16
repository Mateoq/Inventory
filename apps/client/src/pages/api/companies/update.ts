import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import { companiesWithId } from '../services';
import { Company, UpdateCompany } from '@/types';

export default async function updateCompany(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const updateCompany = req.body as UpdateCompany;

  try {
    const result = await axios.put<Company | null>(companiesWithId(updateCompany.id), updateCompany.data);

    res.status(result.status).send(result.data);
  } catch (err) {
    console.log('err', err);
  }
}
