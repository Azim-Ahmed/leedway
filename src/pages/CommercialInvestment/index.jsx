/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import CommercialBanner from '../../components/CommercialComponents/CommercialBanner';
import Divider from '../../components/ReusableComponent/Divider';
import HelmetSection from '../../components/ReusableComponent/HelmetSection';
import Layout from '../../components/SharedComponents/Layout';
// import { IconContext } from 'react-icons';
// import { RiPencilRulerLine } from 'react-icons/ri';
// import { BsConeStriped } from 'react-icons/bs';
// import { BsFilePost } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { getAllCommercial } from '../../api';
/**
 *@function CommercialInvestment.jsx
 *@author Azim
 *
 **/

const CommercialInvestment = (props) => {
  const [loading, setLoading] = useState(true);
  const [commercialData, setCommercialData] = useState([]);

  useEffect(async () => {
    const { data } = await getAllCommercial();
    setCommercialData(data.commercial);
    setLoading(false);
  }, []);
  return (
    <Layout>
      <HelmetSection title='Commercial Investment | LeedWay Group' />
      <CommercialBanner />
      <Section>
        <Container fluid className='mt-5 WhoWeAreSection text-white'>
          <Row>
            {loading ? (
              <p> Loading ....</p>
            ) : (
              commercialData.length > 0 &&
              commercialData.map((item, index) => (
                <>
                  <Col key={index} md={{ span: 10, offset: 1 }} sm={12}>
                    <h1 className='text-center  mb-4'>{item.title}</h1>
                    <h5 style={{ fontWeight: '400' }} className='lead'>
                      {item.subtitle}
                    </h5>
                  </Col>

                  {item.description.split('.').map((det, index) => (
                    <Col key={index} className='mt-2' md={4}>
                      <p className='text-center'>{det}</p>
                    </Col>
                  ))}

                  <Divider />
                </>
              ))
            )}
          </Row>
        </Container>
      </Section>
    </Layout>
  );
};

const Section = styled.div`
  background: white;
  min-height: 750px;
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  padding-bottom: 60px;
  h5 {
    color: black;
  }
`;
export default CommercialInvestment;
