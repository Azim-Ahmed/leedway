import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import userImage from '../../../assets/images';

/**
 *@function CommercialBanner.jsx
 *@author Azim
 *
 **/

const CommercialBanner = () => {
  return (
    <Section background={userImage.landBanner}>
      <Container>
        <Row>
          <Col md={12} className='text-center mb-4'>
            <H1>COMMERCIAL INVESTMENT & REAL ESTATE SERVICE</H1>
          </Col>
          <Col md={12} className='text-center mt-1'>
            <H2>Your investment. Our priority</H2>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
const H1 = styled.h1`
  color: #140101;
  text-shadow: 1px 1px 0px black;
  ${breakpoint('mobile')`
    font-size: 30px;
  `}
  ${breakpoint('tablet')`
    font-size: 35px;
  `}
  ${breakpoint('desktop')`
    font-size: 45px;
  `}
`;
const H2 = styled.h1`
  color: #140303;
  ${breakpoint('mobile')`
    font-size: 23px;
  `}
  ${breakpoint('tablet')`
    font-size: 27px;
  `}
  ${breakpoint('desktop')`
    font-size: 35px;
  `}
`;

const Section = styled.section`
  background-image: linear-gradient(
      rgba(222, 233, 229, 0.5),
      rgba(184, 228, 206, 0.5)
    ),
    url(${(props) => props.background});
  min-height: 450px;
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default CommercialBanner;
