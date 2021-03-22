import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Fotter from '../Fotter/Fotter';
import { useHistory } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

const SignIn = () => {

    let history = useHistory();
    const { id } = useParams();

    const [user, setUser] = useState({

        email: " ",
        password: " ",


    });

    const [LoginStatus, setLoginStatus] = useState(" ");

    const { email, password } = user;

    const onInputChange = (event) => {

        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const onSubmits = async event => {
        event.preventDefault();
        await axios.post("http://localhost:3001/login", user).then(response => {

            if (response.data.message) {
                setLoginStatus(response.data.message)
            }
            else {
                setLoginStatus(response.data[0].id);
                history.push("/userHome");
            }
           
            
        });
       
     

    }

    return (
<>
<NavBar/>
        <div className="container">
            <div className="wrapper">
                <form onSubmit={event => onSubmits(event)}>
                    <h3 className="form-signin-heading py-4" style={{ color: "purple" }}>Login</h3>
                    <hr className="colorgraph" />
                    <h6 style={{color: "red"}}>{LoginStatus}</h6>
                    <div className="form-group py-4">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                            name="email"
                            value={email}
                            onChange={event => onInputChange(event)}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="password">password</label>
                        <input type="password" className="form-control py-4" id="password"
                            name="password"
                            value={password}
                            onChange={event => onInputChange(event)}
                        />
                        <NavLink to="/forgetPassword" title="Forgot Password"> Forgotten account? </NavLink>

                    </div>

                    <button type="submit" className="btn btn-lg btn-primary btn-block">SignIn</button>
                    <button type="submit" className="btn btn-lg btn-danger btn-block">SignIn with Google</button>
                    <button type="submit" className="btn btn-lg btn-primary btn-block"><FacebookIcon/> SignIn with Facebook</button>
                </form>

            </div>

            <br />
            <Fotter />
        </div>
        </>

    );
}

export default SignIn;