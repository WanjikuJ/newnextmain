import React from "react";
import Dashboard from "../../components/dashboard/DashboardLayout";
import Meta from "../../components/Meta";
import AdminMentors from "../../components/dashboard/AdminMentors";
export default function mentor() {
  return (
    <Dashboard user="admin">
      <Meta title="All Mentors" />
      <AdminMentors/>
    </Dashboard>
  );
}
