import ContactForm from '../../components/ContactComponents/ContactForm';
import Layout from '../../components/SharedComponents/Layout';
import HelmetSection from '../../components/ReusableComponent/HelmetSection';
import ContactUs from '../../components/ContactComponents/ContactUs';
import FirstSection from '../../components/ContactComponents/FirstSection';

/**
 *@function Contact.jsx
 *@author Azim
 *
 **/

const Contact = (props) => {
  return (
    <Layout>
      <HelmetSection title='Contact | LeedWay Group' />
      <FirstSection />
      <ContactForm />
      <ContactUs />
    </Layout>
  );
};

export default Contact;
