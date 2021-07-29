import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children, admin, home }) => {
  return (
    <>
      <Header home={home} admin={admin} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
