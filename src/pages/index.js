import Header from '@/components/header';
import HomeHero from '@/components/home/hero';
import HomeTestimonials from '@/components/home/testimonials';
import HomeTransactions from '@/components/home/transactions';
import Head from 'next/head';
import Footer from '../components/footer';
import HomeBetaOverview from '../components/home/betaOverview';
import HomeControl from '../components/home/control';
import HomeFeaturesSlider from '../components/home/featuresSlider';
import HomeScalable from '../components/home/scalable';
import HomeTrusted from '../components/home/trusted';
import Newsletter from '../components/newsletter';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shield Protocol</title>
      </Head>
      <Header />
      <HomeHero />
      <HomeTransactions />
      <HomeControl />
      <HomeTrusted />
      <HomeScalable />
      <HomeBetaOverview />
      <Newsletter />
      <Footer />
    </>
  );
}
