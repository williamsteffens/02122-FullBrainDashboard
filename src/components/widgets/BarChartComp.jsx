import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const BarChartComp = () => {

    const likes = [
        {name: "Monday", posts: 12, shares: 6, comments: 8},
        {name: "Tuesday", posts: 15, shares: 0, comments: 10},
        {name: "Wednesday", posts: 9, shares: 12, comments: 5},
        {name: "Thursday", posts: 5, shares: 5, comments: 12},
        {name: "Thursday", posts: 0, shares: 0, comments: 0}
    ]
    return (
      <div>
        <h1>Weekly Activity Chart</h1>
        <BarChart width={730} height={250} data={likes}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="posts" stackId="a" fill="#8884d8" onClick={postsClick}/>
            <Bar dataKey="shares" stackId="a" fill="#82ca9d" />
            <Bar dataKey="comments" stackId="a" fill="#ffc658" />
        </BarChart>
      </div>
    )
    function postsClick() {
      console.log("Hey")
   }
}
  


export default BarChartComp
