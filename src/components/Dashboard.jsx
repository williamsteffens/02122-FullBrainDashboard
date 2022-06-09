import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardNavbar, BarChart, GraphNetwork, Milestones, Overview, RadarChart } from '.'


const Dashboard = () => {
  return (
    <div className="">
        <BrowserRouter>
            <div>
                <DashboardNavbar />
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Overview />} />

                    <Route path="/milestones" element={<Milestones />} />
                    <Route path="/impact" element={<BarChart />} />
                    <Route path="/network" element={<GraphNetwork />} />
                    <Route path="/distribution" element={<RadarChart />} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default Dashboard