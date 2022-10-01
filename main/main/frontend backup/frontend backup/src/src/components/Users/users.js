import UserDetails from '../UserDetails/userDetails'
import { useState } from 'react'

const Users = (props) => {

    const { userDetails } = props


    return (
        <div >
            {Object.values(userDetails).map((item) => {

                return <UserDetails users1={item} />

            })}
        </div>
    )
}


export default Users