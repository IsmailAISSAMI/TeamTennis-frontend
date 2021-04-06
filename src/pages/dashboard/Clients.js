import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
// COMPONENTS
import DashboardSidebar from "../../components/DashboardSidebar";
// ICONS
import FolderIcon from "@material-ui/icons/Folder";
import AddBoxIcon from '@material-ui/icons/AddBox';

function Clients() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(`http://localhost:8080/api/v1/users`);
      console.log(response.data);
      setUsers(response.data);
    };
    getUsers();
  });

  const renderFullName = (user) => {
    if(!user.firstName)
       return <th>No name provided!</th>;
    return <th>{user.username}</th>;
    }

    const renderRole = (user) => {
        if(!user.isAdmin)
           return "User";
        return "Admin";
        }

  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardSidebar />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="pwd__title">
              <FolderIcon style={{ fontSize: 40 }} />
              <span>Dashboard &gt; client</span>
            </h1>
            <NavLink
              to="/dashboard/clients/register"
              className="btn btn-dark add__button"
            >
              <span className="add__button__text">Add User</span>
              <AddBoxIcon />
            </NavLink>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Full name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr>
                <th>{user.username}</th>
                {
                    renderFullName(user)
                }
                
                <td>{user.email}</td>
                <td>{renderRole(user)}</td>
              </tr>
                
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}

export default Clients;
