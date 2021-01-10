import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';
import Newsletter from '../components/newsletter';
import PageContent from '../components/pages/page-content';

const Roadmap = () => {
  return (
    <>
      <Head>
        <title>Shield Protocol - Roadmap</title>
      </Head>
      <Header darkHeader={true} />
      <PageContent>
        <h1 className="text-center text-slate-dark heading-bigger mb-4">
          ShieldDAO Roadmap
        </h1>

        <p>ShieldDAO Roadmap:</p>

        <img className="present" alt="roadmap" src="/svg/RMAP.svg" />
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

export default Roadmap;
