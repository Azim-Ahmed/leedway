import CategoryEstate from '../../components/RealEstateComponents/CategoryEstate';
import DidYouKnow from '../../components/RealEstateComponents/DidYouKnow';
import HelmetSection from '../../components/ReusableComponent/HelmetSection';
import Layout from '../../components/SharedComponents/Layout';

/**
 *@function RealState.jsx
 *@author Azim
 *
 **/

const RealEstate = (props) => {
  return (
    <Layout>
      <HelmetSection title='Real Estate | LeedWay Group' />
      <DidYouKnow />
      <CategoryEstate />
    </Layout>
  );
};

export default RealEstate;
