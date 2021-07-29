import { Col, Container, Row } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import userImage from '../../assets/images';
import HelmetSection from '../../components/ReusableComponent/HelmetSection';
import Layout from '../../components/SharedComponents/Layout';
import { FiPhoneCall } from 'react-icons/fi';
import breakpoint from 'styled-components-breakpoint';
/**
 *@function HomeSec.jsx
 *@author Azim
 *architect, building, brickwall
 **/

const dataSection = [
  {
    name: 'Land Development',
    image: userImage.landDevelopment,
    navigate: '/land-development',
  },
  {
    name: 'Construction Management',
    image: userImage.constructionManagement,
    navigate: '/construction-management',
  },
  {
    name: 'Commercial Investment',
    image: userImage.commercialInvestment,
    navigate: '/commercial-investment',
  },
];

const HomeSec = () => {
  const history = useHistory();
  return (
    <Layout home>
      <HelmetSection title='Home | LeedWay Group' />
      <H1>Leedway Group</H1>
      <Section background={userImage.homeBannerF}>
        {/* <BannerOfHomePage  /> */}
        <Container>
          <Row>
            <Col className='text-center' md={12} sm={12}></Col>
            <Col className='text-center' md={12} sm={12}>
              <img
                src={userImage.bannerLogo}
                className='img-fluid  banner_____logo'
                alt='logo of this company'
              />
            </Col>
            {dataSection.map((data, index) => (
              <Col
                className='mt-2 mt-md-5 colum___upper____cardSection'
                key={index}
                md={4}
                sm={12}
                xs={12}
              >
                <div
                  className='card__section text-center'
                  onClick={() => history.push(`${data.navigate}`)}
                >
                  <div
                    value={{
                      color: 'black',
                      size: '90px',
                      className: 'react-icons',
                      style: { alignSelf: 'center', margin: '20px 0px' },
                    }}
                  >
                    <img
                      src={data.image}
                      style={{
                        height: '110px',
                        width: 'auto',
                      }}
                      alt=''
                    />
                  </div>
                  <br />
                  <H2>{data.name}</H2>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Section>
      <Buttoned
        onClick={() => {
          history.push(`/contact`);
        }}
      >
        <IconContext.Provider
          value={{
            className: 'react-icon',
            size: '30px',
          }}
        >
          <FiPhoneCall />
        </IconContext.Provider>
        Contact Us
      </Buttoned>
    </Layout>
  );
};

const Buttoned = styled.button`
  margin: 0 auto;
  display: block;
  margin-bottom: 100px;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 7px;
  color: black;
  cursor: pointer;
  align-self: center !important;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1;
  padding: 1.2em 2em;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  .react-icon {
    align-self: center;
    margin: 0px 10px;
  }
  &:hover,
  &:focus .react-icon {
    color: white;

    outline: 0;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    box-shadow: 0 0 40px 40px #00793f inset;
    border: 2px solid #00793f;
  }
  .react-icon:hover {
    color: black;
    outline: 0;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  }

  ${breakpoint('mobile')`
  margin-top: 50px !important;
  `}
  ${breakpoint('tablet')`
    margin-top: -50px !important;
  `}
  ${breakpoint('desktop')`

  `}
`;
const Section = styled.div`
  margin: 90px 0px 130px 0px;
  min-height: 40rem;
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: center center;
  text-align: center;
  overflow: hidden;
  background-size: cover;
`;

const H2 = styled.h2`
  font-weight: 700;
`;
const H1 = styled.h1`
  font-weight: 700;
  margin: 3rem 0rem;
  font-family: Arial;
  text-align: center;
`;

export default HomeSec;
