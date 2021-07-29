import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { postContact } from '../../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_hXWf5QSndhH2gKg1XTo34");
/**
 *@function FormSubmission.jsx
 *@author Azim
 *
 **/

const FormSubmission = (props) => {
  const [toasty, setToasty] = useState(false);
  // render form
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data) => {
    postContact(data);
    emailjs
      .sendForm(
        'service_si5d9b1',
        'template_sup7f3l',
        "#form-submit",
      )
      .then(
        (result) => {

        },
        (error) => {
         alert("network error");
        }
      );
    setToasty(true);
    toastifyData();
    reset();
  };

  const toastifyData = () =>
    toast.success('🦄 Message Sent succesfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const renderHookForm = () => (
    <FormSection>
      <H2 className='text-center'>Contact Us</H2>
      <Form id="form-submit" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={12}>
            <Form.Group controlId='name'>
              <Form.Label>NAME *</Form.Label>
              <Form.Control
                type='text'
                name='name'
                placeholder='name'
                ref={register({ required: true })}
              />
              {errors.name && (
                <small className='text-danger form-text'>
                  Please enter name
                </small>
              )}
            </Form.Group>
          </Col>
          <Col md={12}>
            {' '}
            <Form.Group controlId='email'>
              <Form.Label>EMAIL*</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='eg: example@example.com'
                ref={register({
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                })}
              />
              {errors.email && (
                <small className='text-danger form-text'>
                  Please enter a valid Email-ID
                </small>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId='subject'>
          <Form.Label>SUBJECT*</Form.Label>
          <Form.Control
            type='text'
            name='subject'
            placeholder='eg: Land Development'
            ref={register({ required: true })}
          />
          {errors.subject && (
            <small className='text-danger form-text'>
              Please enter a valid Phone Number
            </small>
          )}
        </Form.Group>
        <Row>
          <Col>
            {' '}
            <Form.Group controlId='message'>
              <Form.Label>MESSAGE*</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                name='message'
                placeholder='Enter Your Message'
                ref={register({ required: true })}
              />
              {errors.message && (
                <small className='text-danger form-text'>
                  Please enter a valid message
                </small>
              )}
            </Form.Group>
          </Col>
        </Row>
        <small className='text-danger'>*Required Info</small>
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              height: '50px',
            }}
            ref={register({ required: true })}
            type='checkbox'
            name='conditions'
            value={`Yes`}
            label='Terms & Conditions'
          />
          {errors.formBasicCheckbox && (
            <small className='text-danger form-text'>
              Please check this terms & Conditions
            </small>
          )}
        </Form.Group>

        <Button
          variant='outline-success'
          className='py-2 font-weight-bold'
          block
          type='submit'
        >
          Submit
        </Button>
      </Form>
    </FormSection>
  );

  return (
    <Section>
      <Container>
        {toasty && (
          <ToastContainer
            style={{ zIndex: '10000000000000000000000', marginTop: '10px' }}
            position='top-center'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        )}
        <Row className='justify-content-md-center'>{renderHookForm()}</Row>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  margin: 3rem 0rem;
`;
const H2 = styled.h2`
  line-height: 21px;
  padding-top: 20px;
  padding-bottom: 30px;
  border-radius: 15px;
  font-size: 38px;
  font-weight: 700;
  ${breakpoint('mobile')`
    font-size: 30px;
  `}
  ${breakpoint('tablet')`
   font-size: 35px;
  `}
  ${breakpoint('desktop')`
    font-size: 40px;
  `}
`;
const FormSection = styled.div.attrs((props) => ({
  className:
    'col-md-10 col-sm-12 col-lg-10 offset-md-1 justify-content-center align-items-center order-sm-1 order-md-2',
}))`
  padding: 2rem;
  margin-top: 3rem;
  box-shadow: 1px 1px 9px gray;
  width: 100%;
  margin-bottom: 100px;
  ${breakpoint('mobile')`
     margin: 3rem 10px !important;
  padding: 2rem;
  width: 100%;
  `}
`;
export default FormSubmission;
