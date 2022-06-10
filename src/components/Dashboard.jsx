import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardNavbar, BarChartComp, GraphNetwork, Milestones, Overview, RadarChartComp } from '.'


const Dashboard = () => {
  return (
    <div>
        <BrowserRouter>
            <div>
                <DashboardNavbar />
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Overview />} />

                    <Route path="/milestones" element={<Milestones />} />
                    <Route path="/impact" element={<BarChartComp />} />
                    <Route path="/network" element={<GraphNetwork />} />
                    <Route path="/knowledge_distribution" element={<RadarChartComp />} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default Dashboard