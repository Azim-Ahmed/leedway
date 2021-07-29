/* eslint-disable jsx-a11y/iframe-has-title */
import { Col, Container, Row } from 'react-bootstrap';

/**
 *@function ContactUs.jsx
 *@author Azim
 *
 **/

const ContactUs = () => {
  return (
    <Container>
      <Row>
        <Col
          className='text-center d-flex justify-content-center align-items-center'
          md={12}
        >
          <div style={{ width: '100%' }}>
            <iframe
              width='100%'
              height='400'
              frameBorder='0'
              scrolling='no'
              marginHeight='0'
              marginWidth='0'
              src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=365%20Queen%20Street%20South,%20Mississauga,%20ON%20L5M%201M3+(Leedway%20group)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
