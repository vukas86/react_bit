import React from 'react'
import { useHistory } from 'react-router-dom'
import { logout } from '../../components/utilies'

export const Admin = () => {
    const history = useHistory();

const handleLogout = () => {
    logout();
    history.push('/login');

}


    return (
        <div>

            <button onClick={handleLogout}>Logout</button>
            <h1>Admin Page</h1>
            
        </div>
    )
}
