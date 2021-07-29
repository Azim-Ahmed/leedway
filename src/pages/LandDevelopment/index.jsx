import styled from 'styled-components';
import userImage from '../../assets/images';
import InvestmentStrategy from '../../components/PropertyComponents/InvestmentStrategy';
import HelmetSection from '../../components/ReusableComponent/HelmetSection';
import RBanner from '../../components/ReusableComponent/RBanner';
import Layout from '../../components/SharedComponents/Layout';

/**
 *@function LandDevelopment.jsx
 *@author Azim
 *
 **/

const LandDevelopment = (props) => {
  return (
    <Layout>
      <HelmetSection title='Land Development | LeedWay Group' />
      <RBanner background={userImage.landBanner} title={`Land Development`} />
      <Section>
        <InvestmentStrategy />
      </Section>
    </Layout>
  );
};
const Section = styled.section`
  background: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.8)
    ),
    url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
`;

export default LandDevelopment;
