import React from "react";
import { NavLink } from "react-router-dom";

// ICONS
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import DescriptionIcon from "@material-ui/icons/Description";
import AssessmentIcon from "@material-ui/icons/Assessment";

function DashboardSidebar() {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/#" className="nav-link">
              <DashboardIcon />
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/#" className="nav-link">
              <PeopleAltIcon />
              Clients
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/#" className="nav-link">
              <DescriptionIcon />
              Subscriptions
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/#" className="nav-link">
              <AssessmentIcon />
              Reports
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default DashboardSidebar;
