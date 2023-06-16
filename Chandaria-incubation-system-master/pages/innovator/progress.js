import React from "react";
import Dashboard from "../../components/dashboard/DashboardLayout";
import Home from "../../components/dashboard/Home";
import Progress from "../../components/dashboard/Progress";
import Meta from "../../components/Meta";
import InnovatorProgress from "../../components/dashboard/InnovatorProgress";

function profile() {
  return (
    <Dashboard user="innovator">
      <Meta title="Innovator progress" />
      {/* <Progress /> */}
      <InnovatorProgress />
    </Dashboard>
  );
}

export default profile;
