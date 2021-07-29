import { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import { UserContext } from '../../../app/App';
import { IconContext } from 'react-icons';
import { FcGoogle } from 'react-icons/fc';
import emails from '../../../assets/EmailFilter';

/**
 *@function LoginSection.jsx
 *@author Azim
 **/

const LoginSection = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || {
    from: { pathname: '/admin/dashboard/home' },
  };
  const { user } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = user;
  const [error, SetError] = useState(false);

  useEffect(() => {
    if (loggedInUser.email) return history.replace(from);
  }, []);

  // const responseGoogle = (response) => {
  //   const filteredEmail = emails.filter(item => item.email == response.profileObj?.email)
  //   if(filteredEmail.length > 0){
  //     setLoggedInUser(response.profileObj);
  //     history.replace(from);
  //   }else{
  //     SetError(true)
  //   }
  const responseGoogle = async (response) => {
    await setLoggedInUser(response.profileObj);
    await history.replace(from);
  };
  return (
    <Section>
      <Container fluid>
        {error ? (
          <h1 className='text-center text-danger mt-5'>Access Denied</h1>
        ) : (
          <h1 className='text-center mt-5'>
            Only Verified Admin Can Access it
          </h1>
        )}
        <Row
          style={{ minHeight: '500px', background: '#32332', width: '100%' }}
        >
          <Col className='d-flex justify-content-center align-items-center'>
            <GoogleLogin
              clientId={`${process.env.REACT_APP_GOOGLE_API}`}
              buttonText='Login'
              render={(renderProps) => (
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Login With Google{' '}
                  <IconContext.Provider
                    value={{
                      color: 'white',
                      size: '30px',
                      className: 'react-icons',
                    }}
                  >
                    <FcGoogle />
                  </IconContext.Provider>
                </Button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  background: #f1f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  font-family: Arial !important;
`;
const Button = styled.div`
  font-size: 16px;
  padding: 12px 30px;
  background: white;
  display: inline-block;
  color: black;
  font-weight: 600;
  border: 1px solid gray;
  height: 50px;
  text-align: center;
  cursor: pointer;
`;
export default LoginSection;
