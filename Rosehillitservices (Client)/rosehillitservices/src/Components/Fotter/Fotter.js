import React from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import Itimage1 from "../Images/Itimage1.jpg";
import BusinessIcon from "@material-ui/icons/Business";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "./Fotter.css";

const Fotter = () => {
  return (
    <>
      <footer className="page-footer font-small blue   py -4 bg-light">
        <NavLink to="/" className="logo">
          <div className="card" style={{ width: "50px", float: "left" }}>
            <img className="card-img-top" src={Itimage1} alt="Card" />
          </div>
        </NavLink>

        <div className="container-fluid text-center text-md-left footer">
          <div className="row">
            <div className="col-md-2 mt-md-0 mt-0">
              <h5 className="text-uppercase">The Provider</h5>{" "}
              <hr style={{ color: "purple" }} />
              <p>Rosehill IT Services & Solutions </p>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h6 className="title">
                {" "}
                <EmailIcon /> Mail Us At{" "}
              </h6>
              <p>
                <a href="mailto:support@boxigo.in" className="text-lowercase">
                  rosehillitservices@gmail.com
                </a>
              </p>

              <h6 className="title">
                {" "}
                <CallIcon /> Call Us At{" "}
              </h6>
              <p>
                <a href="tel:+919643644333">
                  {" "}
                  <WhatsAppIcon />
                  +91 96436 44333
                </a>{" "}
                <br />
                {/* <a href="tel:+919811356113">+91 98113 56113</a> */}
              </p>
            </div>

            <hr
              className="clearfix w-100 d-md-none pb-3"
              style={{ color: "purple" }}
            />

            <div className="col-md-3 mb-md-0 mb-3">
              <div className="contact-info">
                <div className="address">
                  <h6 className="title">
                    {" "}
                    <BusinessIcon /> Address{" "}
                  </h6>
                  <p className="pr-4">
                    A1B/15A , Krishna Appartment ,Paschim Vihar , New Delhi -
                    110063
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-2 mb-md-0 mb-2">
              <h5 className="text-uppercase">Quick Links</h5>

              <ul className="list-unstyled">
                <li>
                  <NavLink className="nav-link" exact to="/aboutUs">
                    AboutUs{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link" exact to="/contactUs">
                    ContactUs{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link" exact to="/register">
                    SignUp{" "}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/signIn">
                    Login{" "}
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-uppercase">Social-Links</h5>

              <ul className="list-unstyled">
                <li>
                  <NavLink className="nav-link" exact to="/">
                    <FacebookIcon /> Facebook
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link" exact to="/">
                    <InstagramIcon /> Instagram{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link" exact to="/">
                    <LinkedInIcon /> LinkedIn
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link" exact to="/">
                    {" "}
                    <TwitterIcon /> Twitter{" "}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="footer-copyright text-center"
        style={{ alignItems: "center" }}
      >
        © 2020 Copyright:
        <NavLink className="nav-link" exact to="/">
          {" "}
          Rosehill IT Services & Solutions{" "}
        </NavLink>
      </div>
    </>
  );
};

export default Fotter;
