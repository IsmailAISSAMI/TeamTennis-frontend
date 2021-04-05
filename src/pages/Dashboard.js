import React from "react";
// COMPONENTS
import DashboardSidebar from "../components/DashboardSidebar";


function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <DashboardSidebar />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>

          </div>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;
