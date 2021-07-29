import { Col, Container, Row } from 'react-bootstrap';
import { IoCallSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { ImLocation2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';
/**
 *@function FirstSection.jsx
 *@author Azim
 *Didact Gothic
 **/

const ContactData = [
  {
    name: 'Address',
    logo: ImLocation2,
    description: '365 Queen Street South, Mississauga, ON L5M 1M3',
  },
  {
    name: 'Phone',
    logo: IoCallSharp,
    description: 'Telephone: (905)-477-4741',
  },
  {
    name: 'Email',
    logo: MdEmail,
    description: 'info@leedwaypm.com',
  },
];

const FirstSection = (props) => {
  return (
    <Container className='mt-4'>
      <h1 className='my-5 text-center'>Contact Us</h1>
      <Row>
        {ContactData.map((data, index) => (
          <Col className='text-center' key={index} md={4}>
            <div>
              <IconContext.Provider
                value={{
                  color: '#67af89',
                  size: '90px',
                  className: 'react-icons',
                  style: {
                    background: '#2b3238',
                    padding: '20px',
                    borderRadius: '50%',
                  },
                }}
              >
                <data.logo />
              </IconContext.Provider>
              <h1 className='my-1'>{data.name}</h1>
              <Paragraph>{data.description}</Paragraph>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const Paragraph = styled.p`
  font-weight: 500;
  margin: 5px 0px;
`;

export default FirstSection;
