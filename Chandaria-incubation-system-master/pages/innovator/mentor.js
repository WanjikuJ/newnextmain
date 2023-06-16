import React from "react";
import Dashboard from "../../components/dashboard/DashboardLayout";
import Meta from "../../components/Meta";
import InnovatorMentor from "../../components/dashboard/InnovatorMentor"
export default function mentor() {
  return (
    <Dashboard user="innovator">
      <Meta title="Your Mentors" />
      <InnovatorMentor/>
    </Dashboard>
  );
}
