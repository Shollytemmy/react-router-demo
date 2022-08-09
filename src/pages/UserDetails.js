import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
    const {userID} = useParams()
    console.log(userID)
    return(
        <div>
            <h1>User {userID} Details Dashboard</h1>
        </div>
    )
}

