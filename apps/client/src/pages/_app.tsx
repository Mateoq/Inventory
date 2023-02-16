import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import Layout from '@/components/layout';
import { store } from '@/store';

export default function App({ Component, pageProps }: AppProps) {
  const { hideNav = false } = pageProps;

  return (
    <Provider store={store}>
      <Layout hideNav={hideNav}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
