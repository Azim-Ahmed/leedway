import { Card, Col, Row } from 'react-bootstrap';
import userImage from '../../../assets/images';

/**
 *@function CategoryEstate.jsx
 *@author Azim
 *
 **/

const estateData = [
  {
    name: 'RETAIL',
    photo: userImage.industry,
    id: '',
  },
  {
    name: 'RETAIL',
    photo: userImage.industry,
    id: '',
  },
  {
    name: 'RETAIL',
    photo: userImage.industry,
    id: '',
  },
];

const CategoryEstate = (props) => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )`,
        minHeight: '100%',
        margin: '60px 0px',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        justifyContent: 'center',
      }}
    >
      <Row>
        {estateData.map((data) => (
          <Col className='m-0 p-0' md={4}>
            <Card className='bg-dark text-white'>
              <Card.Img src={userImage.industry} alt='Card image' />
              <Card.ImgOverlay>
                <Card.Title style={{ fontSize: '30px', fontWeight: '800' }}>
                  {data.name}
                </Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default CategoryEstate;
