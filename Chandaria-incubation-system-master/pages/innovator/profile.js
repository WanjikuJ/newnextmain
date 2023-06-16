import React from 'react'
import Dashboard from '../../components/dashboard/DashboardLayout'
import Profile from '../../components/dashboard/Profile'
import Meta from '../../components/Meta'
import InnovatorProfile from '../../components/dashboard/InnovatorProfile'

function profile() {
  return (
    <Dashboard user="innovator">
      <Meta title="Innovator Profile"/>
      {/* <Profile/> */}
      <InnovatorProfile/>
    </Dashboard>
  )
}

export default profile


