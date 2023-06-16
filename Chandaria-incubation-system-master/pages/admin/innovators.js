import React from "react";
import Dashboard from "../../components/dashboard/DashboardLayout";
import Meta from "../../components/Meta";
import AdminInnovator from "../../components/dashboard/AdminInnovator";
export default function innovator() {
  return (
    <Dashboard user="admin">
      <Meta title="All innovator" />
      <AdminInnovator/>
    </Dashboard>
  );
}
