import { Col, Container, Row } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BiBusSchool } from 'react-icons/bi';
import { RiHotelBedFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

//*
// componentName:
//     author:  ,
// }
//*

const CategoryBanner = () => {
  const bannerStyle = {
    color: 'black',
    fontSize: '20px',
    fontWeight: '700',
  };

  return (
    <Container>
      <Row>
        <Col
          className='shadow-lg p-3 mb-5 bg-white rounded'
          xs={{ span: 6, offset: 3 }}
          sm={{ span: 6, offset: 3 }}
          md={{ span: 6, offset: 3 }}
        >
          <div className='d-flex justify-content-around align-self-center text-center'>
            <IconContext.Provider
              value={{ className: 'CategoryBanner', color: 'black' }}
            >
              <Link to='/bus'>
                <BiBusSchool />
                <p style={bannerStyle}>Bus</p>
              </Link>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ className: 'CategoryBanner', color: 'black' }}
            >
              <Link to='/stay'>
                <RiHotelBedFill />
                <p style={bannerStyle}>Stay</p>
              </Link>
            </IconContext.Provider>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryBanner;
