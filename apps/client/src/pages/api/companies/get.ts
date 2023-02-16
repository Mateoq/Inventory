import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import { companies } from '../services';
import { Company } from '@/types';

export default async function getCompanies(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await axios.get<Company[]>(companies());

    res.status(result.status).send(result.data);
  } catch (err) {
    console.log('err', err);
  }
}
