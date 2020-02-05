import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
//import moment from 'moment';

const Home = props => {
    const { store } = useContext(Context);

    useEffect(() => {
        if (!store.isAuthenticated) props.history.push("/login");
    })


    return (
        <>
            <h1>Home</h1>
        </>
    )
}

export default Home;