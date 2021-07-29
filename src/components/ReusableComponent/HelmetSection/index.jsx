import { Helmet } from 'react-helmet';
/**
 *@function Helmet.jsx
 *@author Azim
 *
 **/

const HelmetSection = ({ title, name, content }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name={name} content={content} />
    </Helmet>
  );
};

export default HelmetSection;
