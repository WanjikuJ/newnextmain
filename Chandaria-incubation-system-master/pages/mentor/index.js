import React from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Home from "../../components/dashboard/Home";
import MentorHome from "../../components/dashboard/MentorHome"
import Meta from "../../components/Meta";
export default function dashboard() {
  return (
    <DashboardLayout user="mentor">
      <Meta title="Mentor Dashboard" />
      {/* <Home/> */}
      <MentorHome />
    </DashboardLayout>
  );
}
