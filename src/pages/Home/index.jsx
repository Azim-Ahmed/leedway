import Layout from '../../components/SharedComponents/Layout';
import HelmetSection from '../../components/ReusableComponent/HelmetSection';
import RBanner from '../../components/ReusableComponent/RBanner';
import userImage from '../../assets/images';
import About from '../../components/HomeComponents/About';

const Home = () => {
  return (
    <Layout>
      <HelmetSection title='About | LeedWay Group' />
      <RBanner background={userImage.construction} title='About Us' />
      <About />
    </Layout>
  );
};

export default Home;
