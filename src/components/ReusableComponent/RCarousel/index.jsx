import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const RCarousel = ({ imageData, settings }) => {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
      }}
    >
      {imageData && (
        <Slider {...settings}>
          {imageData.map((img, index) => (
            <div
              style={{
                width: '100%',
              }}
              key={index}
            >
              <div className='position-relative'>
                <H1>{img.name}</H1>
                <img
                  className='img-fluid w-100'
                  style={{ height: '400px' }}
                  src={img.img}
                  alt=''
                />
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

const H1 = styled.h1`
  bottom: 0;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
`;
export default RCarousel;
// div

// position: relative;
