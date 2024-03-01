import AboutUs from 'components/pages/home/about-us';
import Hero from 'components/pages/home/hero';
import Reviews from 'components/pages/home/reviews';
import Solutions from 'components/pages/home/solutions';
import getMetadata from 'utils/get-metadata';

const Home = () => (
  <>
    <Hero />
    <AboutUs />
    <Solutions />
    <Reviews />
  </>
);

export default Home;

export async function generateMetadata() {
  return getMetadata({
    title: 'DevOptima - Innovative solutions for operational excellence',
    description:
      'DevOps for your business. Continuous Integration & Deployment, Cloud Solutions & Infrastructure Management, Automated Testing & Quality Assurance',
    pathname: '/',
  });
}
