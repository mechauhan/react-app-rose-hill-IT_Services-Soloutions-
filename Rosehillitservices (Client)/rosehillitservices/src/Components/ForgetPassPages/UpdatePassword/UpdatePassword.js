import Axios from 'axios';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';




const UpdatePassword = () => {

    let history = useHistory();
    
    const { id } = useParams();

    const [user, setUser] = useState({


        password: " ",
        cnfpassword: " ",

    });


    const { password, cnfpassword } = user;



    const onInputChange = event => {

        setUser({ ...user, [event.target.name]: event.target.value })
    }

   

    const onSubmits = async (event) => {

        event.preventDefault();
        await Axios.put(`http://localhost:3001/updatePass/${id}`, user);

        history.push('/signIn')
    }

    return (

        <form onSubmit={event => onSubmits(event)}>
            <h3 className="form-signin-heading" style={{ color: "black" }}>Update Password</h3>
            <hr className="colorgraph" />
            <br />


            <div className="form-group">
                <b><label for="password">Password:</label></b>
                <input type="password" className="form-control" id="password"
                    placeholder="Enter password" path="password" required="true"
                    name="password"
                    value={password}
                    onChange={event => onInputChange(event)}
                />

            </div>

            <div className="form-group">
                <b><label for="confrimPassword">Confrim Password:</label></b>
                <input type="password" className="form-control"
                    id="confrimPassword" placeholder="Enter confrim Password" required="true"
                    path="confrimPassword"
                    name="cnfpassword"
                    value={cnfpassword}
                    onChange={event => onInputChange(event)}
                />

                <br />

            </div>

            <button className="btn btn-lg btn-primary btn-block">Submit</button>
        </form>

    )
}


export default UpdatePassword;