import React from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Home from "../../components/dashboard/Home";
import Meta from "../../components/Meta";
import AdminHome from "../../components/dashboard/AdminHome";
export default function dashboard() {
  return (
    <DashboardLayout user="admin">
      <Meta title="Admin Dashboard" />
      {/* <Home/> */}
      <AdminHome />
    </DashboardLayout>
  );
}
