import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
// COMPONENTS
import DashboardSidebar from "../../components/DashboardSidebar";
// ICONS
import FolderIcon from "@material-ui/icons/Folder";
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';

function AddClients() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: false,
    address: "",
    birthDate: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async e =>{
    e.preventDefault()
    try {
        const response = await axios.post('http://localhost:8080/api/v1/users', {...user})
        localStorage.setItem('Authentification', JSON.stringify(response.data))
        window.location.href = "http://localhost:3000/Connexion";
        alert('you have been registered successfully!')
    } catch (err) {
        alert(err)
    }
}

  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardSidebar />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="pwd__title">
              <FolderIcon style={{ fontSize: 40 }} />
              <span>Dashboard &gt; Client &gt; Add New</span>
            </h1>
            <NavLink to="/dashboard/clients" className="btn btn-dark return__button">
                <span className="return__button__text">Return</span> 
              <KeyboardReturnIcon />
            </NavLink>
          </div>
          <form onSubmit={registerSubmit} className="add__client__form">
            <div className="input__field">
              <PersonIcon className="input__icons" />
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={user.firstName}
                onChange={onChangeInput}
              />
            </div>
            <div className="input__field">
              <PersonIcon className="input__icons" />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={user.lastName}
                onChange={onChangeInput}
              />
            </div>
            <div className="input__field">
              <EmailIcon className="input__icons" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={onChangeInput}
              />
            </div>
            <div className="input__field">
              <LockIcon className="input__icons" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={onChangeInput}
              />
            </div>
            <input type="submit" className="btn btn-dark" value="Register" />
          </form>
        </main>
      </div>
    </div>
  );
}

export default AddClients;
