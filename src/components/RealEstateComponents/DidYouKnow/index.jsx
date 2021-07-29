import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

/**
 *@function DidYouKnow.jsx
 *@author Azim
 *
 **/

const DidYouKnow = (props) => {
  return (
    <Container>
      <H1>Did You Know....</H1>
      <Row className='justify-content-md-center'>
        <Col md={4}>
          <section className='didYouKnow'>
            <div class='card'>
              <div class='content'>
                <h2 class='title'>Buying Vs Leasing</h2>
                <p class='copy'>
                  Check out all of these gorgeous mountain trips with beautiful
                  views of, you guessed it, the mountains
                </p>
                <button class='btn'>View Trips</button>
              </div>
            </div>
          </section>
        </Col>
        <Col md={4}>
          <section className='didYouKnow'>
            <div class='card'>
              <div class='content'>
                <h2 class='title'>How to choose the best invesment Property</h2>
                <p class='copy'>
                  If you're looking for investment property and want to choose a
                  property with the most likely chance of getting hard money or
                  conventional funding, look for the following: Income producing
                  - choose a property with sufficient cash flow to cover the
                  monthly expenses of the property including any loans.
                  Structural quality, pride in ownership - choose a property
                  that has been well cared for and one that you are willing and
                  able to continue maintaining. If the property has not been
                  well cared for in the past, consider what you will do to
                  improve the property. Future potential - look for properties
                  in neighborhoods that are improving, or that support
                  businesses in a growth industry. Look ahead 2-5 years to see
                  whether this property is likely to increase in value.
                </p>
                <button class='btn'>View Trips</button>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

const H1 = styled.h1`
  color: #283b62;
  font-weight: 700;
  margin: 60px 0px;
`;
export default DidYouKnow;
