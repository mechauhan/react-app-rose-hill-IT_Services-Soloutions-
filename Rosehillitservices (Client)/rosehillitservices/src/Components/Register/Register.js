import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import Fotter from '../Fotter/Fotter';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import NavBar from '../NavBar/NavBar';

const Register = () => {

    let history = useHistory();

    const [user, setUser] = useState({

        name: " ",
        email: " ",
        password: " ",
        cnfpassword: " ",
        phone: " ",
    });

    const [RegisterStatus, setRegisterStatus] = useState(" ");

    const { name, email, password, cnfpassword, phone } = user;



    const onInputChange = event => {

        setUser({ ...user, [event.target.name]: event.target.value })
    }



    const onSubmits = async (event) => {

        event.preventDefault();
        await Axios.post("http://localhost:3001/register", user).then(response =>{
            if (response) {
                
                setRegisterStatus(response);
            }
            else {
                setRegisterStatus({message :'User Sucessfully registered'});
                history.push("/signIn");
            }
        })
        
        
    };


    return (

<>
<NavBar/>

        <div className="container">
            <div className="wrapper">
                <form onSubmit={event => onSubmits(event)}>
                    <h3 className="form-signin-heading py-4" style={{ color: "purple" }}>Registration Form</h3>
                    <hr className="colorgraph" />




                    <div className="form-group" style={{ color: "lightblue" }}>
                        <label for="userName"><PersonIcon /> UserName:</label>
                        <input type="text" className="form-control"
                            placeholder="Enter Username"
                            name="name"
                            value={name}
                            onChange={event => onInputChange(event)}

                        />
                    </div>


                    <div className="form-group" style={{ color: "lightblue" }}>
                        <b><label for="userEmail"><EmailIcon /> Email:</label></b>
                        <input type="email" className="form-control"
                            placeholder="Enter EmailId"
                            name="email"
                            value={email}
                            onChange={event => onInputChange(event)}
                        />

                    </div>

                    <div className="form-group" style={{ color: "lightblue" }}>
                        <b><label for="password">Password:</label></b>
                        <input type="password" className="form-control"
                            placeholder="Enter password"
                            name="password"
                            value={password}
                            onChange={event => onInputChange(event)}
                        />

                    </div>

                    <div className="form-group" style={{ color: "lightblue" }}>
                        <b><label for="confrimPassword">Confrim Password:</label></b>
                        <input type="password" className="form-control"
                            placeholder="Enter confrim Password"

                            name="cnfpassword"
                            value={cnfpassword}
                            onChange={event => onInputChange(event)}
                        />

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

                    <button className="btn btn-lg btn-primary btn-block">Register</button>

                </form>
            </div>
            <br />
            <Fotter />
        </div>
        </>
    );
}

export default Register;