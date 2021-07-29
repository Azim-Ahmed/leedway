import { Col, Container, Row } from 'react-bootstrap';

/**
 *@function PropertyData.jsx
 *@author Azim
 *
 **/

const PropertyData = (props) => {
  return (
    <section
      style={{
        background: '#283B62',
        minHeight: '750px',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '60px',
      }}
    >
      <Container className='mt-5 WhoWeAreSection text-white'>
        <Row>
          <Col md={{ span: 10, offset: 1 }} sm={12}>
            <h1 className='text-center  mb-4'>Our Commitment</h1>
            <p className='lead'>
              Leedway Group Inc. is committed to manage their portfolio of
              properties efficiently and effectively, as if they were their own.
              We actively listen to our clients and work towards common goals
              forming long-term relationships that have often spanned decades.
              From repairs, maintenance and other daily operations, to in-depth
              financial reporting, budgeting, and forecasting, we have
              continuously earned the confidence of our clients. No matter where
              you happen to be anywhere in the world – you can rest easy knowing
              your property is in excellent hands.
            </p>
          </Col>
          <div
            style={{
              borderBottom: '4px solid #67af89',
              alignItems: 'center',
              width: '100%',
              margin: '40px 90px',
              display: 'flex',
              justifyContent: 'center',
              boxShadow: '1px 1px 8px #5c4a4a',
              textShadow: '2px 2px red',
            }}
          ></div>
          <Col md={{ span: 10, offset: 1 }} sm={12}>
            <h1 className='text-center  mb-4'>What We Provide Our Clients</h1>
            <p className='lead'>
              <ul>
                <li>
                  We are committed to working to increase your property revenues
                  and generate the greatest possible net income for every
                  property.
                </li>
                <li>
                  We strategically market & expose each property to a preferred
                  list of qualified potential buyers and tenants.
                </li>
                <li>
                  We effectively work as liaison between Landlord and Tenants
                  nurturing long term relationships thereby reducing vacancy
                  turnovers.
                </li>
                <li>
                  We provide timely and regular communications with detailed
                  financial reporting.
                </li>
                <li>
                  We provide quality maintenance & service, 24 hours a day, 7
                  days a week, using reputable, experienced contractors known to
                  our business.
                </li>
                <li>
                  We negotiate contracts & work with contractors & vendors in
                  all areas of maintenance, insurance, utilities etc.
                </li>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PropertyData;
