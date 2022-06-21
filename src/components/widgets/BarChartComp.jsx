import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const BarChartComp = ({ user }) => {
    
    if (!user)
      return;

    const data = [
        {name: "Monday", likes: user.activity.monday.likes, shares: user.activity.monday.shares, comments: user.activity.monday.comments},
        {name: "Tuesday", likes: user.activity.tuesday.likes, shares: user.activity.tuesday.shares, comments: user.activity.tuesday.comments},
        {name: "Wednesday", likes: user.activity.wednesday.likes, shares: user.activity.wednesday.shares, comments: user.activity.wednesday.comments},
        {name: "Thursday", likes: user.activity.thursday.likes, shares: user.activity.thursday.shares, comments: user.activity.thursday.comments},
        {name: "Friday", likes: user.activity.friday.likes, shares: user.activity.friday.shares, comments: user.activity.friday.comments}
    ]

    return (
      <div className="h-full">
        <h1 className="font-bold text-xl mb-6">Your Community Impact</h1>
        <div className="flex justify-center">
          <BarChart margin={{ top: 30, right: 30, left: 0, bottom: 10 }} width={650} height={350} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="likes" stackId="a" fill="#8884d8" />
              <Bar dataKey="shares" stackId="a" fill="#82ca9d" />
              <Bar dataKey="comments" stackId="a" fill="#ffc658" />
          </BarChart>
        </div>
      </div>
    )
}
  


export default BarChartComp
