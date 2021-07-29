import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import userImage from '../../../assets/images';
import 'react-toastify/dist/ReactToastify.css';
import FormSubmission from '../FormSubmission';

const ContactForm = () => {
  return (
    <Section>
      <Container fluid className=''>
        <Row className='justify-content-md-center'>
          <Col
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 5, order: 1, offset: 1 }}
            className='d-flex my-5 justify-content-center align-items-center'
          >
            <img width='100%' src={userImage.contact} alt='' />
          </Col>
          <Col
            className='my-5'
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
          >
            <FormSubmission />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
const Section = styled.section`
  margin: 2rem 0rem;
`;
export default ContactForm;
