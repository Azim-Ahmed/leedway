/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Container, Row, Col } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { RiPencilRulerLine } from 'react-icons/ri';
import { BsConeStriped } from 'react-icons/bs';
import { BsFilePost } from 'react-icons/bs';
import styled from 'styled-components';
import Divider from '../../ReusableComponent/Divider';
import { useEffect, useState } from 'react';
import { getAllConstruction } from '../../../api';
/**
 *@function ConsServices.jsx
 *@author Azim
 *
 **/

const consServices = [
  {
    logo: RiPencilRulerLine,
  },
  {
    logo: BsConeStriped,
  },
  {
    logo: BsFilePost,
  },
];
const ConsServices = (props) => {
  const [loading, setLoading] = useState(true);
  const [construction, setConstruction] = useState([]);

  useEffect(async () => {
    const { data } = await getAllConstruction();
    setConstruction(data.construction);
    setLoading(false);
  }, []);
  var combined = construction.map(function (item, index) {
    return {
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      logo: consServices[index].logo,
    };
  });
  return (
    <Section>
      <Container fluid>
        <Row>
          {loading ? (
            <p className='text-center'>Loading...</p>
          ) : (
            combined.map((service) => (
              <>
                <Card
                  key={service.id}
                  className='col-md-10 offset-md-1 my-5 border-0 text-center bg-transparent text-white'
                  style={{ fontFamily: 'Arial' }}
                >
                  <IconContext.Provider
                    value={{
                      size: '71px',
                      color: '#519c74',
                      style: {
                        alignSelf: 'center',
                        margin: '20px 0px 30px  0px',
                      },
                    }}
                  >
                    <service.logo />
                  </IconContext.Provider>
                  <h1 style={{ color: 'black', fontWeight: '600' }}>
                    {service.title}{' '}
                    <span
                      style={{
                        color: 'black',
                        fontWeight: '200',
                        fontSize: '2rem',
                      }}
                    >
                      Phase
                    </span>
                  </h1>
                  <Card.Body style={{ color: 'black' }}>
                    <Card.Text
                      as='h6'
                      style={{ fontWeight: '300', lineHeight: '30px' }}
                      className='lead'
                    >
                      {service.subtitle}
                    </Card.Text>
                  </Card.Body>
                </Card>
                {service.description.split('.').map((det, index) => (
                  <Col key={index} md={4}>
                    <p className='text-center'>{det}</p>
                  </Col>
                ))}

                <Divider />
              </>
            ))
          )}
        </Row>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  margin: 4rem 0px;
  padding: 30px 0px;
`;
export default ConsServices;
