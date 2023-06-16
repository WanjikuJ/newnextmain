import React from "react";
import Dashboard from "../../components/dashboard/DashboardLayout";
import Meta from "../../components/Meta";
import InnovatorInnovations from "../../components/dashboard/InnovatorInnovations";
export default function innovations() {
  return (
    <Dashboard user="innovator">
      <Meta title="Your innovations" />
      <InnovatorInnovations />
    </Dashboard>
  );
}
