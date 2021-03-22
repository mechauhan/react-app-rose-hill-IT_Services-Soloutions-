import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';
import SearchPage from './Components/SearchPage/SearchPage';
import WebDevelopment from './Components/WebDevelopment/WebDevelopment';
import WebTesting from './Components/WebTesting/WebTesting';
import WebDesigning from './Components/WebDesigning/WebDesigning';
import Admin from './Components/AdminPages/Admin/Admin';
import ViewUser from './Components/AdminPages/ViewUser/ViewUser';
import UserHome from './Components/UserPages/UserHome/UserHome';
import UserUpdate from './Components/UserPages/UserUpdate/UserUpdate';

import ForgetPassword from './Components/ForgetPassPages/ForgetPassword/ForgetPassword';
import VerifyOtp from './Components/ForgetPassPages/VerifyOtp/VerifyOtp';
import UpdatePassword from './Components/ForgetPassPages/UpdatePassword';

import NotFound from './Components/NotFound';
import AdminEditUser from './Components/AdminPages/AdminEditUser/AdminEditUser';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/Register" component={Register} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/searchPage" component={SearchPage} />
          <Route path="/webDevelopment" component={WebDevelopment} />
          <Route path="/webTesting" component={WebTesting} />
          <Route path="/webDesigning" component={WebDesigning} />
          <Route path="/admin" component={Admin} />
          <Route path="/adminEditUser/:id" component={AdminEditUser} />
          <Route path="/viewUser/:id" component={ViewUser} />
          <Route path="/userHome" component={UserHome} />
          <Route path="/updateUser/:id" component={UserUpdate} />
          
          <Route path="/forgetPassword" exact component={ForgetPassword} />
          <Route path="/verifyOtp" component={VerifyOtp} />
          <Route path="/updatePass" component={UpdatePassword} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
