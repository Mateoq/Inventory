import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import { companiesWithId } from '../services';
import { Company, DeleteCompany } from '@/types';

export default async function deleteCompany(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const deleteCompany = req.body as DeleteCompany;

  try {
    const result = await axios.delete<Company | null>(companiesWithId(deleteCompany.id));

    res.status(result.status).send(result.data);
  } catch (err) {
    console.log('err', err);
  }
}
