import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const DashboardNavbar = () => {
    const activeLink = "text-fullbrain-purple border-b-[3px] border-b-fullbrain-purple static";
    const normalLink = "";

    return (
        <div className="flex justify-between border-b-[3px] border-b-slate-600 items-end mb-5">
            <h1 className="text-xl font-medium">Dashboard</h1>
            <div className="flex items-end gap-3">
                <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>
                    <span>Overview</span>
                </NavLink>
                <NavLink to="/milestones" className={({ isActive }) => isActive ? activeLink : normalLink}>
                    <span>Milestones</span>
                </NavLink>
                <NavLink to="/impact" className={({ isActive }) => isActive ? activeLink : normalLink}>
                    <span>Impact</span>
                </NavLink>
                <NavLink to="/network" className={({ isActive }) => isActive ? activeLink : normalLink}>
                    <span>Network</span>
                </NavLink>
                <NavLink to="/knowledge_distribution" className={({ isActive }) => isActive ? activeLink : normalLink}>
                    <span>Knowledge</span>
                </NavLink>
            </div>
        </div>
  )
}

export default DashboardNavbar