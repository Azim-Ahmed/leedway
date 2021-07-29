import { Col, Container, Row, Card } from 'react-bootstrap';
import userImage from '../../../assets/images';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RCarousel from '../../ReusableComponent/RCarousel';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

//*
// componentName:
//     author:'Azim
// }
//*
const { hotelImage1, hotelImage2 } = userImage;
const specialOfferData = [
  {
    name: "Hotel Cox's Today",
    location: "Cox's Bazar",
    ratings: '4.8',
    id: '1',
    reviews: '180',
    currency: 'BDT',
    price: '6900/Night',
    image: hotelImage1,
  },
  {
    name: 'Royal Tulip',
    location: "Cox's Bazar",
    ratings: '4.8',
    id: '2',
    reviews: '180',
    currency: 'BDT',
    price: '6900/Night',
    image: hotelImage2,
  },
  {
    name: 'Hotel Sonargaon',
    location: "Cox's Bazar",
    ratings: '4.8',
    id: '3',
    reviews: '180',
    currency: 'BDT',
    price: '6900/Night',
    image: hotelImage1,
  },
  {
    name: "Hotel Cox's Today",
    location: "Cox's Bazar",
    ratings: '4.8',
    id: '4',
    reviews: '180',
    currency: 'BDT',
    price: '6900/Night',
    image: hotelImage2,
  },
  {
    name: "Hotel Cox's Today",
    location: "Cox's Bazar",
    ratings: '4.8',
    id: '4',
    reviews: '180',
    currency: 'BDT',
    price: '6900/Night',
    image: hotelImage2,
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'none',
        color: 'none',
        height: 'auto',
        width: 'auto',
      }}
      onClick={onClick}
    >
      {' '}
      <IconContext.Provider
        value={{
          style: {
            fontSize: '70px',
            color: 'rgb(64, 110, 238)',
          },
        }}
      >
        <RiArrowRightSLine />{' '}
      </IconContext.Provider>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'white',
        color: 'none',
        height: 'auto',
        width: 'auto',
      }}
      onClick={onClick}
    >
      {' '}
      <IconContext.Provider
        value={{
          style: {
            fontSize: '70px',
            color: 'rgb(64, 110, 238)',
          },
        }}
      >
        <RiArrowLeftSLine />{' '}
      </IconContext.Provider>
    </button>
  );
}

const SpecialOffer = () => {
  const settings = {
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    slidesToShow: 2.11,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <Container fluid className='my-5'>
      <div className='d-flex'>
        <h2 className='text-left h1TagSpecialOffer'>Special Offer</h2>
        <div className='d-flex specialOfferstyle'>
          <p>All Offers</p>
          <p>Stay</p>
          <p>Bus</p>
          <p>Tour Package</p>
        </div>
      </div>
      <RCarousel settings={settings} specialOfferData={specialOfferData} />
    </Container>
  );
};

export default SpecialOffer;
