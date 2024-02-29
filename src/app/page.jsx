import AboutUs from 'components/pages/home/about-us';
import Hero from 'components/pages/home/hero';
import getMetadata from 'utils/get-metadata';

const Home = () => (
  <>
    <Hero />
    <AboutUs />
  </>
);

export default Home;

export async function generateMetadata() {
  // FIXME: Add real data here
  return getMetadata({
    title: 'Home - Next.js Tailwind Starter',
    description: 'Next.js Tailwind Starter',
    pathname: '/',
  });
}
