import { Col, Container, Row } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import userImage from '../../assets/images';
// import { createBreakpoint, createMap } from 'styled-components-breakpoint';
import HelmetSection from '../../components/ReusableComponent/HelmetSection';
import RBanner from '../../components/ReusableComponent/RBanner';
import Layout from '../../components/SharedComponents/Layout';
import { FiPhoneCall } from 'react-icons/fi';
import breakpoint from 'styled-components-breakpoint';
/**
 *@function HomeSec.jsx
 *@author Azim
 *
 **/

const dataSection = [
  {
    name: 'Land Development',
    image: userImage.home___logo1,
    navigate: '/contact',
  },
  {
    name: 'Construction Management',
    image: userImage.home___logo2,
    navigate: '/contact',
  },
  {
    name: 'Commercial Investment',
    image: userImage.home___logo3,
    navigate: '/contact',
  },
];

const HomeSec = (props) => {
  const history = useHistory();
  return (
    <Layout home>
      <HelmetSection title='Home | LeedWay Group' />
      <Section>
        <RBanner background={userImage.background3} top />
        <Container>
          <Row>
            <Col className='text-center' md={12} sm={12}>
              <H1>The Leedway Group</H1>
            </Col>
            <Col className='text-center' md={12} sm={12}>
              <img
                src={userImage.bannerLogo}
                style={{ height: 'auto', width: '10rem' }}
                className='img-fluid'
                alt='logo of this company'
              />
            </Col>
            {dataSection.map((data, index) => (
              <Column className='mt-5' key={index} md={4} sm={12} xs={12}>
                <CardSection onClick={() => history.push(`${data.navigate}`)}>
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
                        height: '90px',
                        width: 'auto',
                      }}
                      alt=''
                    />
                  </div>
                  <H2>{data.name}</H2>
                </CardSection>
              </Column>
            ))}
          </Row>
        </Container>
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
      </Section>
    </Layout>
  );
};

// const breakpoints = {
//   xs: 0,
//   sm: 576,
//   md: 768,
//   lg: 992,
//   xl: 1200,
// };
// const breakpoint = createBreakpoint(breakpoints);

const CardSection = styled.div.attrs({
  className: 'text-center',
})`
  cursor: pointer;
  /* padding: 80px; */
  align-items: center;
  border-radius: 50%;
  box-shadow: 2px 2px 16px gray;
  height: 350px;
  transition: 0.2s linear;
  transform: translateY(0px);
  //without hover
  display: flex;
  justify-content: center;
  /*
  ${breakpoint('mobile')`
    height: 360px;
  H2 {
    font-size:20px;
      margin: 30px 0px 0px 0px;
    }
  `} */

  /* ${breakpoint('tablet')`
       height: 360px;
       box-shadow: 2px 2px 16px gray;
  H2 {
    font-size:30px;
      margin: 30px 0px 0px 0px;
    }

  `} */
  /* ${breakpoint('md')`
         height: 280px;
      H2 {
    font-size:30px;
      margin: 20px 0px 0px 0px;
    }
    img{
      height:60px;
    }
    box-shadow: 2px 2px 16px gray;
  `} */
  /* ${breakpoint('lg')`
   height: 350px;
   &:hover {
    display: block;
    box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
    H2 {
      display: block;
      margin: 30px 0px 15px 0px;
    }
    button {
      display: block;
    }
  }
  `} */

  ${breakpoint('mobile')`
    height: 360px;
  H2 {
    font-size:20px;
      margin: 30px 0px 0px 0px;
    }
  `}
  ${breakpoint('tablet')`
     height: 360px;
       box-shadow: 2px 2px 16px gray;
  H2 {
    font-size:30px;
      margin: 30px 0px 0px 0px;
    }
  `}
  ${breakpoint('desktop')`
   height: 350px;
   &:hover {
    display: block;
    box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
    H2 {
      display: block;
      margin: 30px 0px 15px 0px;
    }
    button {
      display: block;
    }
  }
  `}
`;

const Buttoned = styled.button`
  box-sizing: border-box;
  margin-top: 150px;
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
  /* margin: 20px; */
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
    box-shadow: 0 0 40px 40px #2ecc71 inset;
    border: 2px solid #2ecc71;
  }
  .react-icon:hover {
    color: black;
    outline: 0;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  }
`;
const Section = styled.div`
  margin: 90px 0px 170px 0px;
  min-height: 40rem;
  background-repeat: no-repeat;
  background-position: center center;
  text-align: center;
`;

const Column = styled.div.attrs({
  className: 'mt-5',
})`
  ${breakpoint('xs')`
 margin-top:5px;
  `}

  ${breakpoint('sm')`
       margin-top:10px;
  `}
  ${breakpoint('md')`
    margin-top:15px;
  `}
   ${breakpoint('lg')`
margin-top:35px;
  `}
`;

const H2 = styled.h2`
  font-weight: 700;
  display: none;
  /* margin-top: 20px; */
`;
const H1 = styled.h1`
  font-weight: 700;
  margin: 3rem 0rem;
`;

export default HomeSec;
