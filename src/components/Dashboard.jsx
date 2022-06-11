import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardNavbar, Overview, Milestones, BarChartComp, GraphNetwork, RadarChartComp } from '.';



const Dashboard = () => {
  return (
    <div>
        <div>
            <DashboardNavbar />
        </div>
        <div>
            <Routes>
                <Route path="overview" element={<Overview />} />
                
                <Route path="milestones" element={<Milestones />} />
                <Route path="impact" element={<BarChartComp />} />
                <Route path="network" element={<GraphNetwork />} />
                <Route path="knowledge_distribution" element={<RadarChartComp />} />
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard