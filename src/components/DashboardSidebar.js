import React from "react";
import { NavLink } from "react-router-dom";

// ICONS
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import DescriptionIcon from "@material-ui/icons/Description";
import AssessmentIcon from "@material-ui/icons/Assessment";

function DashboardSidebar() {
  return (
    <nav className="col-md-2 d-none d-md-block bg-dark sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="#" className="nav-link">
              <DashboardIcon />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/clients" className="nav-link">
              <PeopleAltIcon />
              <span>Clients</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/#" className="nav-link">
              <DescriptionIcon />
              <span>Subscriptions</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/#" className="nav-link">
              <AssessmentIcon />
              <span>Reports</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default DashboardSidebar;
