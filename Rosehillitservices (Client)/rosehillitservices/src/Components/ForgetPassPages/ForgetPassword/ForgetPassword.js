import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';


const ForgetPassword = () => {

    let history = useHistory();

    const [user, setUser] = useState({

        email: " ",

    });

    const { email } = user;

    const onInputChange = (event) => {

        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const onSubmits = (event) => {

        event.preventDefault();
        console.log(event.target.value);
        history.push("/verifyOtp");
    }

    return (
        <>
        
        <div>
            <h3 className="form-signin-heading" style={{ color: "lightblue" }}>Forget Password</h3>
            <form onSubmit={event => onSubmits(event)}>

                <div className="form-group">
                    <b><label for="userEmail">EmailId:</label></b>
                    <input type="userEmail" className="form-control" required="true"
                        id="userEmail" placeholder="Enter EmailId" path="userEmail"
                        name="email"
                        value={email}
                        onChange={event => onInputChange(event)}
                    />
                </div>


                <button type="submit" className="btn btn-primary">Generate OTP To Reset</button>
            </form>
        </div>
        </>
    )
}


export default ForgetPassword;




