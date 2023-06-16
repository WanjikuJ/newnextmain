import React from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Home from "../../components/dashboard/Home";
import Meta from "../../components/Meta";
export default function dashboard() {
  return (
    <DashboardLayout user="innovator">
      <Meta title="Innovator Dashboard"/>
      <Home/>
    </DashboardLayout>
  );
}