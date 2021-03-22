import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AdminFotter from '../AdminFotter/AdminFotter';


const ViewUser = () => {

    const [user, setUser] = useState({

        name: " ",
        email: " ",
        phone: " ",
    });



    const { id } = useParams();

    useEffect(() => {
        loadUser();

    },[]);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/viewUser/${id}`);
       
        setUser(result.data[0]);
        console.log(result); 
    }

    return (
<>
        <div className="container py-4">
            <Link className="btn btn-primary" style={{float:"right"}} to="/admin">
                Back To AdminHome
            </Link>
            <h1 className="display-4"> User Id: {id}</h1>
            <hr />
            <ul>
                <li className="list-group-item">name :  {user.name}</li>
                <li className="list-group-item">email : {user.email}</li>
                <li className="list-group-item">phone : {user.phone}</li>

            </ul>
        </div>
        <AdminFotter />
        </>
    );
}



export default ViewUser;