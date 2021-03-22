import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import UserFotter from '../UserFotter/UserFotter';
import UserNavbar from '../UserNavbar/UserNavbar';

const UserHome = () => {
    const [user, setUser] = useState([]);


    const { id } = useParams();

    let history = useHistory();


    //     useEffect(() => {
    //         loadUsers();

    //     }, [])  

    //     const loadUsers = async () => {

    //         const result = await axios.get(`http://localhost:3001/user/${id}`);
    //         console.log(result);
    //         setUser(result);  
    // }



    return (

        <>
        <UserNavbar/>
            <div>
                <button type="submit" className="btn btn-primary mr-2" style={{ float: "right" }} onClick={() => { history.push('signIn') }}>Logout</button>
                {/* <button className="btn btn-outline-primary mr-2" onClick={() => { history.push(`updateUser/${id}`) }}><EditIcon />Edit</button> */}
            </div>


            <UserFotter />
        </>
    );
}

export default UserHome;