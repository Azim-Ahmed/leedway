/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { SiOrigin } from 'react-icons/si';
import { AiOutlineControl } from 'react-icons/ai';
import { ImExit } from 'react-icons/im';
import { IconContext } from 'react-icons';
import breakpoint from 'styled-components-breakpoint';
import { useEffect, useState } from 'react';
import { getAllLand } from '../../../api';
/**
 *@function InvestmentStrategy.jsx
 *@author Azim
 *
 **/

const investmentData = [
  {
    logo: SiOrigin,
  },
  {
    logo: AiOutlineControl,
  },
  {
    logo: ImExit,
  },
];

const NextSt = (props) => {
  const [loading, setLoading] = useState(true);
  const [LandData, setLandData] = useState([]);

  useEffect(async () => {
    const { data } = await getAllLand();
    setLandData(data.land);
    setLoading(false);
  }, []);
  var combined = LandData.map(function (item, index) {
    return {
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      logo: investmentData[index].logo,
    };
  });
  return (
    <Section>
      <Container fluid>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Header className='text-center'>Approach</Header>
        </div>
        <Row className='justify-content-md-center text-center'>
          {loading ? (
            <p className='text-center'>Loading....</p>
          ) : (
            combined.length > 0 &&
            combined.map((data, index) => (
              <Col key={index} md={4} sm={12} xs={12} lg={4}>
                <CardSection>
                  <IconContext.Provider
                    value={{
                      color: '#2d6546',
                      size: '60px',
                      className: 'react-icons my-1',
                    }}
                  >
                    <data.logo />
                  </IconContext.Provider>

                  <h3 className=' my-3'>{data.title}</h3>
                  <Paragraph className='lead'>{data.description}</Paragraph>
                </CardSection>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  background: transparent;
  width: 100%;
  min-height: 450px;

  /* margin: 60px 0px; */
  padding: 30px 0px;
`;

const Header = styled.h1`
  font-weight: 700;
  font-size: 3.5rem;
  margin: 30px auto;
  padding: 10px 200px;
  border-bottom: 4px solid #2d6546;
  display: inline-block;
  ${breakpoint('mobile')`
font-size: 2rem;
padding: 10px 100px;
  `}
  ${breakpoint('tablet')`
font-size: 2.7rem;
  `}
  ${breakpoint('desktop')`
  font-size: 3.5rem;
  `}
`;

const Paragraph = styled.p`
  color: black;
  margin-top: 20px;
  font-weight: 350;
  letter-spacing: 1px;
`;
const CardSection = styled.div`
  margin-top: 20px;
  padding: 40px;
`;
export default NextSt;
