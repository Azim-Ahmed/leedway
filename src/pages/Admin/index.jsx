import { Col, Container, Row } from 'react-bootstrap';
import LoginSection from '../../components/AdminComponents/LoginSection';
import Layout from '../../components/SharedComponents/Layout';

/**
 *@function Admin.jsx
 *@author Azim
 *
 **/

const Admin = (props) => {
  return (
    <Layout admin>
      <Container>
        <Row>
          <Col>
            <LoginSection />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Admin;
