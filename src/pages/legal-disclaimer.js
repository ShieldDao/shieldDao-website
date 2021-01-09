import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';
import Newsletter from '../components/newsletter';
import PageContent from '../components/pages/page-content';

const LegalDisclaimerPage = () => {
  return (
    <>
      <Head>
        <title>Shield Protocol - Tokenomics</title>
      </Head>
      <Header darkHeader={true} />
      <PageContent>
        <h1 className="text-center text-slate-dark heading-bigger mb-4">
          Legal Disclaimer
        </h1>

        <p>
          ShieldDAO disclaims any responsibility or legal liability to users for
          damages of any kind, including lost profits, lost savings or any other
          incidental or consequential damages relating to the providing of the
          Data or the use of it. ShieldDAO expressly disclaims any
          responsibility to defend or indemnify users against claims of others
          based on users’ copying, reliance, distribution, or other use of any
          of the Data. Users assume the risk of providing this Data and shall
          have no remedy at law or equity against ShieldDAO in case the Data
          provided is inaccurate, incomplete or otherwise defective in any way.
          Users providing this Data agree to hold ShieldDAO harmless should any
          claim arise out of the use of such Data.
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

export default LegalDisclaimerPage;
