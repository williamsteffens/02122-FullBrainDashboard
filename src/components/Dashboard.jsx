import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardNavbar, Overview, Milestones, BarChartComp, NetworkComp, RadarChartComp } from '.';



const Dashboard = ({ users }) => {
  console.log(users);

  return (
    <div>
        <div>
            <DashboardNavbar />
        </div>
        <div>
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="overview" element={<Overview />} />
                
                <Route path="milestones" element={<Milestones />} />
                <Route path="impact" element={<BarChartComp />} />
                <Route path="network" element={<NetworkComp users={ users } />} />
                <Route path="knowledge_distribution" element={<RadarChartComp />} />
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard