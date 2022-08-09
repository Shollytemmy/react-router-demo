import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UserDetails = () => {
    const navigate = useNavigate()
    const {userID} = useParams()
    console.log(userID)
    return(
        <div>
            <h1>User {userID} Details Dashboard</h1>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

