import Head from 'next/head';
import { NextPageContext } from 'next';
import cookie from 'cookie';

import SignInForm from '@/complex-components/SignInForm';
import { servicesStrs, paths } from '@/constants';

export default function Auth() {
  return (
    <>
      <Head>
        <title>Inventory - Authentication</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <SignInForm />
      </section>
    </>
  );
}

export async function getServerSideProps({ req, res }: NextPageContext) {
  const cookies = cookie.parse(req?.headers.cookie ?? '');

  console.log('COOKIES', cookies);

  if (cookies[servicesStrs.TOKEN_COOKIE]) {
    res?.writeHead(301, { Location: paths.HOME });
    res?.end();
    return {
      props: {
        hideNav: true
      }
    };
  }

  return {
    props: {
      hideNav: true
    }
  };
}
