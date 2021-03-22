import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';



const VerifyOtp = () => {

	let history = useHistory();

	const [user, setUser] = useState({
        
        otp: " ",
    });

    const { otp } = user;

    const onInputChange = (event) => {

        setUser({ ...user, [event.target.name]: event.target.value })
    }



	const onSubmits = (event) => {
		event.preventDefault();
        console.log(event.target.value);
        history.push("/updatePass");
	}

	return (

		<form onSubmit={event => onSubmits(event)}>

			<h3 className="form-signin-heading" style={{ color: "purple" }}>Verify OTP</h3>
			<hr className="colorgraph" />
			<br />

			<div className="form-group">
				<b><label for="otp">Enter your OTP here :</label></b>
				<input type="number" className="form-control" id="otp"
					required="true" placeholder="Enter your OTP number"  path="otp"
					name="otp"
					value={otp}
					onChange={event => onInputChange(event)}
				/>
			</div>


			<button className="btn btn-lg btn-primary btn-block">Verify OTP</button>

		</form>


	);

}

export default VerifyOtp;