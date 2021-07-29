import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from './App';


const PrivateRouter = ({ children, ...rest }) => {

    const { user } = useContext(UserContext)
    const [loggedInUser, setLoggedInUser] = user;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/admin/dashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRouter;