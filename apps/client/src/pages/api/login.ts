import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { serialize } from 'cookie';

import { login as loginService } from './services';

import { servicesStrs } from '@/constants';

export interface LoginResult {
  access_token: string;
}

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body: args } = req;

  try {
    const result = await axios.post<LoginResult | null>(loginService(), args);

    if (result && result.data) {
      const cookie = serialize(servicesStrs.TOKEN_COOKIE, result.data.access_token, {
        httpOnly: true,
        path: '/'
      });
      res.setHeader('Set-Cookie', cookie);
      res.send({ success: true });
      res.end();
    } else {
      res.status(result.status).send({ success: false });
    }
  } catch (err) {
    console.log('err', err);
  }
}
