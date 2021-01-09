import NProgress from 'nprogress';
import Head from 'next/head';
import Router from 'next/router';
import { useEffect } from 'react';
import '@/root/styles/globals.css';
import '@/modules/nprogress/nprogress.css';
import { AppProvider } from '@/providers/App';
import '@/modules/swiper/swiper.scss';

function App({ Component, pageProps }) {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    Router.events.on('routeChangeStart', () => NProgress.start());
    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());

    return () => {
      Router.events.off('routeChangeStart', () => NProgress.start());
      Router.events.off('routeChangeComplete', () => NProgress.done());
      Router.events.off('routeChangeError', () => NProgress.done());
    };
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,800&amp;display=swap&amp;subset=latin-ext"
          rel="stylesheet"
        />
      </Head>

      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default App;
