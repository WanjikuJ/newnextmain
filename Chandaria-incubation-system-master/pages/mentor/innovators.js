import React from "react";
import Dashboard from "../../components/dashboard/DashboardLayout";
import Meta from "../../components/Meta";
import MentorInnovators from "../../components/dashboard/MentorInnovators"
export default function innovators() {
  return (
    <Dashboard user="mentor">
      <Meta title="Your innovators" />
      <MentorInnovators/>
    </Dashboard>
  );
}
