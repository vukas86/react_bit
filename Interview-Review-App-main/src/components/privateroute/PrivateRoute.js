import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utilies';


export const PrivateRoute = ({component: Component}) => {
    return(

        <Route render = {props => {
            isLogin()? <Component {...props} /> : <Redirect to="/login"></Redirect>
        }

        }
        
        />
        
    )
}