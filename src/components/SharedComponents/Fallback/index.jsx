import preloader from '../../../assets/images/FallBack/load.gif';

const Fallback = () => {
  return (
    <div className='fallback-loader'>
      <img src={preloader} alt='preloader' />
    </div>
  );
};

export default Fallback;
