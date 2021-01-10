import Header from '@/components/header';
import HomeHero from '@/components/home/hero';
import HomeTransactions from '@/components/home/transactions';
import Head from 'next/head';
import Footer from '../components/footer';
import StickySurvey from '../components/home/sticky-survey';
import Newsletter from '../components/newsletter';
import HomeInfoGraphics from '../components/home/infographics';
import HomeTeam from '../components/home/team';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shield Protocol</title>
      </Head>
      <StickySurvey />
      <Header />
      <HomeHero />
      <HomeTransactions />
      <HomeInfoGraphics />
      {/* <HomeTeam /> */}
      <Newsletter />
      <Footer />
    </>
  );
}
