import { Card, Container, Row } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaHandshake } from 'react-icons/fa';
import { GiFamilyHouse } from 'react-icons/gi';
import { ImMakeGroup } from 'react-icons/im';
import { useHistory } from 'react-router-dom';
/**
 *@function OurServices.jsx
 *@author Azim
 *
 **/

const ourServices = [
  {
    name: 'Land Development',
    description:
      'Assisting owners in obtaining their desired level of financial security for their properties while providing Tenants with management services 24 hours a day, 7 days a week.',
    logo: FaHandshake,
    navigate: '/land-development',
    id: 1,
  },
  {
    name: 'Construction Management',
    description:
      'Offering a diverse selection of Commercial, Industrial and Condo properties For Lease & For Sale throughout  Ontario',
    navigate: '/construction-management',
    logo: GiFamilyHouse,
    id: 2,
  },
  {
    name: 'Commercial Investments and Sales',
    description:
      'Our team of professionals are experts in navigating and resolving the environmental, economic, physical and political issues inherent in complex development projects. We can take the project from start to finish.',
    logo: ImMakeGroup,
    navigate: '/commercial-investment',
    id: 3,
  },
];

const OurServices = () => {
  const history = useHistory();
  return (
    <section
      style={{
        background: ` rgb(30 48 84)`,
        width: '100%',
        minHeight: '450px',
        margin: '60px 0px',
        padding: '30px 0px',
      }}
    >
      <h1 className='text-white text-center mb-4'>Our Services</h1>
      <Container>
        <Row>
          {ourServices.length > 0
            ? ourServices.map((service) => (
                <Card
                  key={service.id}
                  className='col-md-4 my-3 border-0 text-center bg-transparent text-white'
                >
                  <IconContext.Provider
                    value={{
                      size: '70px',
                      color: '#e8c468',
                      style: {
                        alignSelf: 'center',
                        margin: '10px 0px',
                      },
                    }}
                  >
                    <service.logo />
                  </IconContext.Provider>
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Body className='lead' style={{ color: '#e8c468' }}>
                    {service.description}
                  </Card.Body>

                  <button
                    onClick={() => {
                      history.push(`${service.navigate}`);
                    }}
                    type='button'
                    className='serviceBtn'
                  >{`Learn More...`}</button>
                </Card>
              ))
            : null}
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;
