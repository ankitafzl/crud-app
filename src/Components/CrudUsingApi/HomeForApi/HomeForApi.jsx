import React from 'react'
import Navbar from '../Navbar/Navbar';

const  HomeForApi = () =>{
    // useEffect(()=>{
    //     console.log("data")
    // })
    return(
        <>
        <div className="main">
        <Navbar/>
            <h2>Welcome <br/>
            For The Crud Operation <br/>
            Using API
            </h2>
        </div>
        </>
    );
}
export default HomeForApi;