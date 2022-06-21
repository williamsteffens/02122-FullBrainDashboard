import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardNavbar, Overview, Milestones, BarChartComp, NetworkComp, RadarChartComp } from '.';



const Dashboard = ({ users }) => {

  return (
    <div className="flex flex-col w-full">
        <div>
            <DashboardNavbar />
        </div>
        <div className="mx-20 mb-5">
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="overview" element={<Overview />} />   
                <Route path="milestones" element={<Milestones />} />
                <Route path="impact" element={<BarChartComp user={users[0]} />} />
                <Route path="network" element={<NetworkComp user={users[0]} users={users} />} />
                <Route path="knowledge_distribution" element={<RadarChartComp user={users[0]} />} />
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard