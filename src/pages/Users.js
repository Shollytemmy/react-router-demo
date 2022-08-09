import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const Users = () => {
    // const {userID} = useParams()
    const usersId = [1, 2, 3, 6, 9, 56]
  return (
    <div style={{border: '1px solid red'}}>
        {
            usersId.map((id) => {
                return(
                     <Link to={`/users/${id}`} key={id}>
                            <h1>user {id}</h1>
                            
                        </Link>
                )
            })
        }

     
    </div>
  )
}
