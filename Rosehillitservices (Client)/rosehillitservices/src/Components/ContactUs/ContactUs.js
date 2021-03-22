import React, { useState } from 'react';
import Fotter from '../Fotter/Fotter';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';
import NavBar from '../NavBar/NavBar';

const ContactUs = () => {

    let history = useHistory();

    const [user, setUser] = useState({

        name: " ",
        email: " ",
        phone: " ",
        service: " ",
        comments: " ",

    });
    const [selectService, setselectService] = useState("webDevelopment");


    const { name, email, phone, service, comments } = user;
    const { webDevelopment, webTesting } = selectService;


    const onInputChange = event => {

        setUser({ ...user, [event.target.name]: event.target.value })


        setselectService({ ...selectService, [event.target.name]: event.target.value })

    }



    const onSubmits = async (event) => {

        event.preventDefault();
        await Axios.post("http://localhost:3001/contact", user)
        history.push("/");
    }



    return (
        <>
        <NavBar />
        <div className="container">
            <div className="wrapper">
                <form onSubmit={event => onSubmits(event)}>
                    <h3 className="form-signin-heading" style={{ color: "skyblue" }}>ContactUs Form</h3>
                    <hr class="colorgraph" />


                    <div className="form-group" style={{ color: "lightblue" }}>
                        <b><label for="name"><PersonIcon />UserName:</label></b>
                        <input type="text" className="form-control" id="name"
                            placeholder="Enter Your  Username" required="true" path="name"
                            name="name"
                            value={name}
                            onChange={event => onInputChange(event)}

                        />
                    </div>

                    <div className="form-group" style={{ color: "lightblue" }}>
                        <b><label for="email"><EmailIcon /> Email:</label></b>
                        <input type="email" className="form-control" id="email"
                            placeholder="Enter Your EmailId" required="true" path="email"
                            name="email"
                            value={email}
                            onChange={event => onInputChange(event)} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>


                    </div>

                    <div className="form-group" style={{ color: "lightblue" }}>
                        <b><label for="phone"><CallIcon /> Phone Number :</label></b>
                        <input type="number" maxlength="12" pattern="\d{10}"
                            className="form-control" id="phone" required="true"
                            placeholder="Enter Your PhoneNumber" path="phone"
                            name="phone"
                            value={phone}
                            onChange={event => onInputChange(event)} />



                    </div>

                    <div className="form-group" style={{ color: "lightblue" }}>


                        <h3 className="form-signin-heading" style={{ color: "lightblue" }}>Choose a Service  </h3>
                        <h4 className="form-signin-heading" style={{ color: "purple" }}>Service you choosen is : {service}</h4>

                        <select
                            className="custom-select"
                            name="service"
                            value={service}
                            onChange={event => onInputChange(event)}>
                            <option name="webDevelopment" value={webDevelopment}>Web-Development</option>
                            <option name="webTesting" value={webTesting}>Web-Testing</option>

                        </select>

                    </div>

                    <div className="form-group" style={{ color: "lightblue" }}>

                        <h3 className="form-signin-heading" style={{ color: "lightblue" }}> Comments </h3>

                        <textarea path="comments" className="form-control" id="comments" rows="5" cols="150"
                            placeholder="Please Enter the detailed information"
                            name="comments"
                            value={comments}
                            onChange={event => onInputChange(event)} />


                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>

                    </div>

                    <button className="btn btn-lg btn-primary btn-block">Submit Enquiry</button>

                </form>
            </div>
            <br />
            <Fotter />
        </div>
        </>
    );
}

export default ContactUs;