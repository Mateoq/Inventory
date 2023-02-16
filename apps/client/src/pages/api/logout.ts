import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

import { servicesStrs } from '@/constants';

export interface LoginResult {
  access_token: string;
}

export default async function logout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Set-Cookie', serialize(servicesStrs.TOKEN_COOKIE, '', { httpOnly: true, path: '/', maxAge: 0 }));
  res.send({ success: true });
  res.end();
}
