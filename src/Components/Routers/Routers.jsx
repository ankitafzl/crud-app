import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import AddUser from "../CrudUsingApi/AddUser/AddUser";
import Edit from "../CrudUsingApi/Edit/Edit";
import Update from "../CrudUsingApi/Edit/update";
import HomeForApi from "../CrudUsingApi/HomeForApi/HomeForApi";
import ViewAll from "../CrudUsingApi/ViewAll/ViewAll";
import Delete from "../CrudUsingApi/Delete/Delete";
import HomeForSession from "../CrudUsingSessionStorage/HomeForSession/HomeForSession";
import AddInStorage from "../CrudUsingSessionStorage/AddInStorage/AddInStorage";
import ViewFromStorage from '../CrudUsingSessionStorage/ViewFromStorage/ViewFromStorage';
import EditInStorage from '../CrudUsingSessionStorage/EditInStorage/EditInStorage';
import DeleteFromStorage from '../CrudUsingSessionStorage/DeleteFromStorage/DeleteFromStorage';


function Routers(){
    return(
    <Router>
        <Routes>
            <Route path="/" exact element={<HomePage/>}/>
            <Route path="/homeApi" element={<HomeForApi />} />
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/viewAll" element={<ViewAll />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/updateDetails" element={<Update />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/homeSession" element={<HomeForSession/>} />                
            <Route path="/addInStorage" element={<AddInStorage/>} />
            <Route path="/viewStorage" element={<ViewFromStorage/>} />
            <Route path="/editInStorage" element={<EditInStorage/>} />
            <Route path="/deleteFromStorage" element={<DeleteFromStorage/>} />
        </Routes>
    </Router>
    )
}

export default Routers;