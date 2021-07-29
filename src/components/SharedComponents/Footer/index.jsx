import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { RiArrowUpCircleLine, RiCopyrightLine } from 'react-icons/ri';
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  const scrollToTopBtn = () => {
    window.scrollTo({ top: 10, left: 10, behavior: 'smooth' });
  };
  return (
    <section className='pl-3 footerBackgroundStyle'>
      <Container fluid>
        <Row>
          <Col md={{ span: 8, order: 1 }} xs={{ span: 12, order: 2 }}>
            <p className='text-white mt-4'>
              <RiCopyrightLine /> {new Date().getFullYear()} Leedway Group All
              rights reserved.
            </p>
          </Col>
          <Col
            className='position-relative'
            md={{ span: 4, order: 2 }}
            xs={{ span: 12, order: 1 }}
          >
            <IconContext.Provider value={{ className: 'react-icons' }}>
              <a
                href='https://www.facebook.com'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                <AiFillLinkedin />
              </a>
              <a
                href='https://www.instagram.com/leedwaygroup/'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                <AiOutlineInstagram />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'UpArrow' }}>
              <span className='scrollToTopStyles' onClick={scrollToTopBtn}>
                <RiArrowUpCircleLine />
              </span>
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
