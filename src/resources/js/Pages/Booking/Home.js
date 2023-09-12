import React from "react";
import {useSelector} from 'react-redux';
const Home = () =>{
const {user} = useSelector((state)=>({...state}));

    return (
        <div className="container-fluid p-5 h1 text-center">Home {JSON.stringify(user)}</div>
    )
}

export default Home;