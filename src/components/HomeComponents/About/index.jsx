/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { HiOutlineArrowNarrowRight, HiBadgeCheck } from 'react-icons/hi';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { getAllAbout } from '../../../api';
/**
 *@function About.jsx
 *@author Azim
 *
 **/

const About = (props) => {
  const [loading, setLoading] = useState(true);
  const [aboutData, setAboutData] = useState([]);

  useEffect(async () => {
    const { data } = await getAllAbout();
    setAboutData(data.about);
    setLoading(false);
  }, []);

  return (
    <Section>
      <Container className='mt-5'>
        <Row>
          <Col>
            {loading ? (
              <p>Loading...</p>
            ) : (
              aboutData?.map((item, index) => (
                <div key={index}>
                  <div style={{ position: 'relative' }}>
                    <h1 className='text-center  mb-4'>{item.title}</h1>
                    {item.type === 'description' ? (
                      <>
                        <p className='p-3'>{item.description}</p>
                        <div
                          style={{
                            borderBottom: '3px solid #67af89',
                            margin: '20px 20px',
                            position: 'absolute',
                            left: '-17%',
                            right: '-17%',
                            top: '95%',
                          }}
                        />
                      </>
                    ) : null}
                  </div>

                  <div style={{ position: 'relative' }} className='mt-5'>
                    {item.type === 'arrow' ? (
                      <>
                        {item.description.split('.').map((itemed) => (
                          <Div className='d-flex' key={itemed}>
                            <IconContext.Provider
                              value={{
                                color: 'black',
                                className: 'react-icons',
                                style: {
                                  marginRight: '20px',
                                  height: '50px',
                                  width: '50px',
                                },
                              }}
                            >
                              <HiOutlineArrowNarrowRight />
                            </IconContext.Provider>
                            <p className=''>{itemed}</p>
                          </Div>
                        ))}
                        <div
                          style={{
                            borderBottom: '3px solid #67af89',
                            margin: '20px 20px',
                            position: 'absolute',
                            left: '-17%',
                            right: '-17%',
                            top: '95%',
                          }}
                        />
                      </>
                    ) : null}
                  </div>
                  <div style={{ position: 'relative' }} className='mt-5'>
                    {item.type === 'time' ? (
                      <>
                        {item.description.split('.').map((itemed) => (
                          <Div key={itemed} className='d-flex'>
                            <IconContext.Provider
                              value={{
                                color: 'black',

                                className: 'react-icons',
                                style: {
                                  marginRight: '2rem',
                                  height: '50px',
                                  width: '50px',
                                },
                              }}
                            >
                              <HiBadgeCheck />
                            </IconContext.Provider>
                            <p className=''>{itemed}</p>
                          </Div>
                        ))}{' '}
                      </>
                    ) : null}
                  </div>
                </div>
              ))
            )}
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default About;

const Div = styled.div`
  padding: 0px 200px;
  ${breakpoint('mobile')`
     padding: 0px 30px;
     font-size:12px;
  `}
  ${breakpoint('tablet')`
      padding: 0px 100px;
      font-size:14px;
  `}
  ${breakpoint('desktop')`
   padding: 0px 200px;
   font-size:16px;
  `}
`;
const Section = styled.section`
  h1 {
    font-size: 40px;
  }
  ${breakpoint('mobile')`
h1{
  font-size:24px;
}
  `}
  ${breakpoint('tablet')`
  h1{
    font-size:28px;
}
  `}
  ${breakpoint('desktop')`
  h1{
  font-size:40px;
}
  `}
`;
