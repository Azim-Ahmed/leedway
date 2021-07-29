import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

/**
 *@function RBanner.jsx
 *@author Azim
 *
 **/

const RBanner = (props) => {
  return (
    <Section
      background={props.background}
      top={props.top}
      nonGrad={props.nonGrad}
    >
      <Container>
        <Row>
          <Col md={12} className='text-center'>
            <H1>{props.title}</H1>
          </Col>
          <Col md={12} className='text-center'>
            <H2>
              {props.subtitle}
              <span className='text-success'>
                {props.secondTitle ? props.secondTitle : null}
              </span>
            </H2>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
const H1 = styled.h1`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 1px 1px 0px black;
  ${breakpoint('mobile')`
    font-size: 28px;
  `}
  ${breakpoint('tablet')`
    font-size: 38px;
  `}
  ${breakpoint('desktop')`
    font-size: 55px;
  `}
`;
const H2 = styled.h1`
  ${breakpoint('mobile')`
    font-size: 30px;
  `}
  ${breakpoint('tablet')`
    font-size: 35px;
  `}
  ${breakpoint('desktop')`
    font-size: 46px;
  `}
`;

const Section = styled.section`
  background: linear-gradient(
      rgba(202, 228, 210, 0.6),
      rgba(184, 209, 192, 0.7)
    ),
    url(${(props) => props.background});
  margin-top: ${(props) => (props.top ? -100 : 0)}px;
  /* min-height: 450px; */
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakpoint('mobile')`
  height: 280px;
  `}
  ${breakpoint('tablet')`
    height: 320px;
  `}
  ${breakpoint('desktop')`
    height: 450px;
  `}
`;
export default RBanner;
