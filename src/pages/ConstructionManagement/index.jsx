import userImage from '../../assets/images';
import ConsServices from '../../components/ConsManageComponents/ConsServices';
import HelmetSection from '../../components/ReusableComponent/HelmetSection';
import RBanner from '../../components/ReusableComponent/RBanner';
import Layout from '../../components/SharedComponents/Layout';
/**
 *@function ConstructionManagement.jsx
 *@author Azim
 *
 **/

const ConstructionManagement = () => {
  return (
    <Layout>
      <HelmetSection title='Construction Management | LeedWay Group' />
      <RBanner
        background={userImage.construction}
        title={`Construction Management`}
      />
      <ConsServices />
    </Layout>
  );
};

export default ConstructionManagement;
