import React from 'react'
import { Link, useParams, useNavigate} from 'react-router-dom'

export const Users = () => {
    // const {userID} = useParams()
    const navigate = useNavigate()
    const usersId = [1, 2, 3, 6, 9, 56]
  return (
    <div style={{border: '0px solid red'}}>
        {
            usersId.map((id) => {
                return(
                     <div onClick={() => navigate(`/users/${id}`)} key={id}>
                            <h1>user {id}</h1>
                            
                        </div>
                )
            })
        }

     
    </div>
  )
}


/**
 * 
 * [
 * {
 * id: 1,
 * name: ""
 * }
 * ]
 */