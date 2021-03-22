import React from 'react';
import { NavLink } from 'react-router-dom';
import Itimage1 from '../UserNavbar/Itimage1.jpg';
import HomeIcon from '@material-ui/icons/Home';

const UserNavbar = () => {


  const onSubmits = (event) => {
    console.log(event.target.value);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" id="navbarToggleExternalContent">
      <div className="container"  >

        <NavLink to="/" className="logo">
          <div className="card" style={{ width: "50px" }}>
            <img className="card-img-top" src={Itimage1} alt="Card" />
          </div>
        </NavLink>
        &nbsp;
        <NavLink className="navbar-brand" to="/">RoseHill IT Services & Solutions </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
          <ul className="navbar-nav  ml-auto mr-1">
            <li className="nav-item " >
              <NavLink className="nav-link" exact to="/"><HomeIcon /> Home </NavLink>
            </li>

            <li className="nav-item" >
              <NavLink className="nav-link" exact to="/contactUs">ContactUs </NavLink>
            </li>

            <li className="nav-item" >
              <NavLink className="nav-link" exact to="/contactUs">Update Profile </NavLink>
            </li>
            {/* onClick={() => { history.push(`updateUser/${id}`) }} */}

            <li className="nav-item" > 
              <NavLink className="nav-link" exact to="/signIn">Logout </NavLink>
            </li>

            <li className="nav-item dropdown" id="navbarToggleExternalContent">

              <NavLink className="nav-link dropdown-toggle" exact to="/services" data-toggle="dropdown" >Services </NavLink>

              <ul className="dropdown-menu" >
                <li><NavLink to="/webDevelopment" className="dropdown-item" title="Web-Development"  >Web-Development </NavLink></li>
                <li><NavLink to="/webTesting" className="dropdown-item" title="Web-Testing "  >Web-Testing </NavLink></li>
                <li><NavLink to="/webDesigning" className="dropdown-item" title="Web-Designing "  >Web-Designing</NavLink></li>
              </ul>
            </li>

            <form className="form-inline my-2 my-lg-0" onSubmit={event => onSubmits(event)}>
              <input className="form-control mr-sm-2 py-2" type="search" placeholder="Search" aria-label="Search" />
            &nbsp;&nbsp;
            <button className="btn btn-outline-light  " type="submit" >Search</button>
            </form>

          </ul>
        </div>
      </div>
      {/* <NavLink className="btn btn-outline-light" to="/users/add">AddUser</NavLink> */}
    </nav>
  );
}

export default UserNavbar;