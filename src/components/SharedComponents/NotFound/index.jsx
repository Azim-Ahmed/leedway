import { Col, Container, Row } from 'react-bootstrap';
import userImage from '../../../assets/images';
import {
  Link
} from "react-router-dom";
/**
 *@function NotFound.jsx
 *@author Azim
 *
 **/

const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col>
        <div className="d-flex justify-content-center align-items-center">
        <img
            className='img-fluid pt-5 m-auto'
            src={userImage.notFound}
            alt='notFound'
          />
        </div>
        <Link to="/" className="text-center">Back to home page</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
