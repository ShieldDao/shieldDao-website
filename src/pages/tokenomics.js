import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';
import Newsletter from '../components/newsletter';
import PageContent from '../components/pages/page-content';
import Image from 'next/image';

const TokenomicsPage = () => {
  return (
    <>
      <Head>
        <title>Shield Protocol - Tokenomics</title>
      </Head>
      <Header darkHeader={true} />
      <PageContent>
        <h1 className="text-center text-slate-dark heading-bigger mb-4">
          ShieldDAO Tokenomics
        </h1>

        <p>ShieldDAO Tokenomics is as the following:</p>

        <img className="present" src="/svg/SHDTokenomics.svg" />
      </PageContent>
      <Newsletter />
      <Footer />

      <style jsx>
        {`
          img.present {
            width: 100%;
            height: auto;
            pointer-events: none;
          }
        `}
      </style>
    </>
  );
};

export default TokenomicsPage;
