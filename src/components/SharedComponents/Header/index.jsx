import { Navbar, Nav } from 'react-bootstrap';
import userImage from '../../../assets/images';
import Headroom from 'react-headroom';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ admin, home }) => {
  if (home) {
    return <></>;
  }

  return (
    <Headroom
      style={{
        WebkitTransition: 'all .5s ease-in-out',
        MozTransition: 'all .5s ease-in-out',
        OTransition: 'all .5s ease-in-out',
        transition: 'all .5s ease-in-out',
        background: '#0a192f',
        boxShadow: '1px 1px 1px rgba(0,0,0,0.25)',
      }}
    >
      <Navbar bg='light' expand='lg'>
        {admin ? (
          <div className='container-fluid text-center'>
            <Link to='/admin/dashboard'>
              <Navbar.Brand>
                <img
                  style={{ height: '45px' }}
                  src={userImage.bannerLogo}
                  alt='logo'
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'></Nav>
            </Navbar.Collapse>
          </div>
        ) : (
          <div className='container-fluid text-center'>
            <Link to='/'>
              <Navbar.Brand>
                <img
                  style={{ height: '45px' }}
                  src={userImage.bannerLogo}
                  alt='logo'
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                <li className='nav-item mr-3'>
                  <NavLink to='/home' className='nav-link'>
                    HOME
                  </NavLink>
                </li>
                <li className='nav-item mr-3'>
                  <NavLink to='/about' className='nav-link'>
                    ABOUT
                  </NavLink>
                </li>
                <li className='nav-item mr-3'>
                  <NavLink to='/land-development' className='nav-link'>
                    LAND DEVELOPMENT
                  </NavLink>
                </li>
                <li className='nav-item mr-3'>
                  <NavLink to='/construction-management' className='nav-link'>
                    CONSTRUCTION MANAGEMENT
                  </NavLink>
                </li>
                <li className='nav-item mr-3'>
                  <NavLink to='/commercial-investment' className='nav-link'>
                    COMMERCIAL INVESTMENT
                  </NavLink>
                </li>

                <li className='nav-item mr-3'>
                  <NavLink to='/contact' className='nav-link'>
                    CONTACT
                  </NavLink>
                </li>
              </Nav>
            </Navbar.Collapse>
          </div>
        )}
      </Navbar>
    </Headroom>
  );
};

export default Header;
