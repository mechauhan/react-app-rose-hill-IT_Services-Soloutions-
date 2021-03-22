import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import './UserUpdate.css';
import UserFotter from '../UserFotter/UserFotter';
import UserNavbar from '../UserNavbar/UserNavbar';

const UserUpdate = () => {

    let history = useHistory();


    const { id } = useParams();

    const [user, setUser] = useState({

        name: " ",
        email: " ",
        password: " ",
        cnfpassword: " ",
        phone: " ",
    });


    const { name, email, password, cnfpassword, phone } = user;



    const onInputChange = event => {

        setUser({ ...user, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        loadUser();
    }, [])

    const onSubmits = async (event) => {

        event.preventDefault();
        await Axios.put(`http://localhost:3001/updateUser/${id}`, user);

        history.push('/admin')
    }


    const loadUser = async () => {

        const result = await Axios.get(` http://localhost:3001/users/${id} `);
        setUser(result.data[0]);
        console.log(result);
    }


    return (
        <>
        <UserNavbar/>
        <div className="container">
            <div className="wrapper">
                <form onSubmit={event => onSubmits(event)}>
                    <h3 className="form-signin-heading py-4" style={{ color: "purple" }}>Update Profile {id} </h3>
                    <hr className="colorgraph" />




                    <div className="form-group" style={{ color: "lightblue" }}>
                        <b><label for="userName"><PersonIcon /> UserName:</label></b>
                        <input type="text" className="form-control"
                            placeholder="Enter Username"
                            name="name"
                            value={name}
                            onChange={event => onInputChange(event)} />
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
                        <input type="number" className="form-control"
                            placeholder="Enter your phone number"
                            name="phone"
                            value={phone}
                            onChange={event => onInputChange(event)}
                        />

                    </div>


                    <button className="btn btn-lg btn-primary btn-block">Update Profile</button>

                </form>
            </div>
            <br />
            <UserFotter />
        </div>
        </>
    );
}



export default UserUpdate;