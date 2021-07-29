import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from '../components/SharedComponents/NotFound';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import LandDevelopment from '../pages/LandDevelopment';
import RealEstate from '../pages/RealState';
import CommercialInvestment from '../pages/CommercialInvestment';
import ConstructionManagement from '../pages/ConstructionManagement';
import Admin from '../pages/Admin';
import PrivateRouter from './PrivateRoute';
import Dashboard from '../pages/Dashboard/Dashboard';
import ServiceList from '../pages/Dashboard/ServiceList';
import Contacts from '../pages/Dashboard/Contacts';
import HomeSec from '../pages/HomeSec';
import AdLandDevelopment from '../pages/Dashboard/AdLandDevelopment';
import AdConstruction from '../pages/Dashboard/AdConstruction';
import AdCommercial from '../pages/Dashboard/AdCommercial';
import About from '../pages/Dashboard/About';


const AppRouter = () => {
  return (
    <Router>
      <Switch>

        <Route exact path="/home">
          <HomeSec />
        </Route>
        <PrivateRouter exact path='/admin/dashboard/home'>
          <Dashboard />
        </PrivateRouter>
        <PrivateRouter exact path="/admin/dashboard/serviceList" >
          <ServiceList />
        </PrivateRouter>
        <PrivateRouter exact path="/admin/dashboard/about" >
          <About />
        </PrivateRouter>
        <PrivateRouter exact path="/admin/dashboard/contact">
          <Contacts />
        </PrivateRouter>
        <PrivateRouter path="/admin/dashboard/Land-Development">
          <AdLandDevelopment />
        </PrivateRouter>
        <PrivateRouter path="/admin/dashboard/Construction">
          <AdConstruction />
        </PrivateRouter>
        <PrivateRouter path="/admin/dashboard/Commercial">
          <AdCommercial />
        </PrivateRouter>
        <PrivateRouter exact path="/admin/dashboard/home">
          <ServiceList />
        </PrivateRouter>
        <Route path="/land-development">
          < LandDevelopment />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/commercial-investment">
          <CommercialInvestment />
        </Route>
        <Route path="/construction-management">
          <ConstructionManagement />
        </Route>
        <Route path="/real-estate">
          <RealEstate />
        </Route>
        <Route path="/admin/dashboard">
          <Admin />
        </Route>
        <Route path="/about">
          <Home />
        </Route>
        <Route path="/real-estate">
          <RealEstate />
        </Route>
        <Route exact path="/">
          <HomeSec />
        </Route>

        <Route path="/*">
          <NotFound />
        </Route>

      </Switch>
    </Router>
  )
}

export default AppRouter
