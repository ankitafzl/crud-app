import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CrudApp from '../CrudApp/CrudApp';
import Navbar from '../Navbar/Navbar';
import AddUser from '../AddUser/AddUser';
import ViewAll from '../ViewAll/ViewAll';
import Edit from '../Edit/Edit';
import Delete from '../Delete/Delete';
import AddInStorage from '../AddInStorage/AddInStorage';
import ViewFromStorage from '../ViewFromStorage/ViewFromStorage';
import EditInStorage from '../EditInStorage/EditInStorage';
import DeleteFromStorage from '../DeleteFromStorage/DeleteFromStorage';
import Update from '../Edit/update';


function RoutePage() {
   
    // const [values,setValues]=useState({});
    // console.log(values);
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<CrudApp />} />
                <Route path="/addUser" element={<AddUser />} />
                {/* <Route path="/viewAll" element={<ViewAll setUpdateValue={setValues} />} />
                <Route path="/edit/" element={<Edit data={values} />} /> */}
                <Route path="/viewAll" element={<ViewAll/>} />
                <Route path="/edit" element={<Edit/>} />
                <Route path="/updateDetails" element={<Update/>} />
                <Route path="/delete" element={<Delete />} />
                <Route path="/addInStorage" element={<AddInStorage/>} />
                <Route path="/viewStorage" element={<ViewFromStorage/>} />
                <Route path="/editInStorage" element={<EditInStorage/>} />
                <Route path="/deleteFromStorage" element={<DeleteFromStorage/>} />

            </Routes>
        </Router>
    );
}

export default RoutePage;