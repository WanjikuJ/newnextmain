import React from "react";
import Dashboard from "../../components/dashboard/DashboardLayout";
import Profile from "../../components/dashboard/Profile";
import Meta from "../../components/Meta";
import MentorProfile from "../../components/dashboard/MentorProfile";

function profile() {
  return (
    <Dashboard user="mentor">
      <Meta title="Mentor Profile" />
      {/* <Profile/> */}
      <MentorProfile />
    </Dashboard>
  );
}

export default profile;
