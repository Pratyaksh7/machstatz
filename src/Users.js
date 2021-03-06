import axios from 'axios';
import React, { useState } from 'react';
import User from './User';
import './Users.css';
import {useEffect} from "react";
import { Link } from 'react-router-dom';

const getUsersUrl = "http://15.207.229.231:8000/machstatz/get_all_users";

function Users() {

    const [userData, setuserData] = useState([]);

    const get_all_users = async() => {
        const response = await axios.get(getUsersUrl);
        setuserData(response.data);
    };

    useEffect(() => {
        get_all_users();
    }, []);

    console.log(userData);

    return (
        <>
            <Link to="/add_user" className="btn btn-primary">Add New User</Link>
            <h2>Users</h2>
            <div className="users">   

            {
                userData.map((user)=>{
                    return(
                        <User user={user} key={user._id.$oid} />
                    )
                })
            }             
                
            </div>
        </>
    )
}

export default Users
