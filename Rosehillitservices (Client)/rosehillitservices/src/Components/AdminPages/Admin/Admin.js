import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import AdminFotter from'../AdminFotter/AdminFotter';




const Admin = () => {

    // const {userDispatch: dispatch} =useContext(GlobalContext);

    const [users, setUser] = useState([]);
    let history = useHistory();

    useEffect(() => {
        loadUsers();

    }, [])                           // this blank array is given so that this function
    // only run onle otherwise it will run infinite time



    const loadUsers = async () => {

        const result = await axios.get("http://localhost:3001/users");
        setUser(result.data);  
        // setUser(result.data.reverse());         //the data will come at the top whatever we are 
        //adding it is happening reverse function 

    }

    const deleteUser = async id => {
        

        await axios.delete(`http://localhost:3001/delete/${id}`);
        loadUsers();
    }

    // const onChange=(event ,{ value })=>  {

    //     const searchText = value.trim().replace(/" "/g ,"");


    //     searchUser(searchText)(dispatch);
      
    // }

    return (
        <div className="container">
            <div className="py-4">
                <h1> ADMIN PAGE !! </h1> 
                <button type="submit" className="btn btn-primary mr-2" style={{float:"right"}} onClick={() => { history.push('signIn') }}>Logout</button>
                <table className="table border shadow">

{/* 
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            &nbsp;
            <button className="btn btn-outline-light" type="submit" onChange={onChange}>Search</button> */}

                    <thead className="thead-dark" >
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col"></th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row"> {index + 1} </th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    
                                    <td style={{float:"right"}}>  
                                        <Link className="btn btn-primary mr-2" to={`/viewUser/${user.id}`}><VisibilityIcon/>View</Link>
                                        <Link className="btn btn-outline-primary mr-2" to={`/adminEditUser/${user.id}`}><EditIcon/>Edit</Link>
                                        <Link className="btn btn-danger" onClick={() => deleteUser(user.id)} ><DeleteIcon/>Delete</Link>

                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <AdminFotter />
        </div>
    );
}



export default Admin;