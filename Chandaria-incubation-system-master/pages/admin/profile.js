import React from "react";
import Dashboard from "../../components/dashboard/DashboardLayout";
import AdminProfile from "../../components/dashboard/AdminProfile";
import Meta from "../../components/Meta";

function profile() {
  return (
    <Dashboard user="admin">
      <Meta title="Admin Profile" />
      <AdminProfile />
    </Dashboard>
  );
}

export default profile;
