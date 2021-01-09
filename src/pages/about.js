import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';
import Newsletter from '../components/newsletter';
import PageContent from '../components/pages/page-content';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Shield Protocol - Tokenomics</title>
      </Head>
      <Header darkHeader={true} />
      <PageContent>
        <h1 className="text-center text-slate-dark heading-bigger mb-4">
          About ShieldDAO
        </h1>

        <p className="text-center">
          <img src="/images/logo-black.png" alt="ShieldDAO" />
        </p>

        <p>
          ShieldDAO is a decentralized community of Blockchain products users,
          who votes, take decisions, delegate, index and curate Blockchain
          assets. ShieldDAO Community is born after Old Cover Protocol hack,
          with the idea to better protect community members thanks to specific
          governance &amp; delegation. ShieldDAO Community is considered as the
          main driver and asset. ShieldDAO is aimed at improving Blockchain user
          experience, securing data using The Graph protocol and creating social
          utility products for ease of living. ShieldDAO supply is pre-mined and
          will not be providing mint functions.
        </p>
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

export default AboutPage;
