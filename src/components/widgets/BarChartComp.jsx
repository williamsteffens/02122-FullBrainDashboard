import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

    // const data = [
    //     {name: "Monday", likes: user.activity.monday.likes, shares: user.activity.monday.shares, comments: user.activity.monday.comments},
    //     {name: "Tuesday", likes: user.activity.tuesday.likes, shares: user.activity.tuesday.shares, comments: user.activity.tuesday.comments},
    //     {name: "Wednesday", likes: user.activity.wednesday.likes, shares: user.activity.wednesday.shares, comments: user.activity.wednesday.comments},
    //     {name: "Thursday", likes: user.activity.thursday.likes, shares: user.activity.thursday.shares, comments: user.activity.thursday.comments},
    //     {name: "Friday", likes: user.activity.friday.likes, shares: user.activity.friday.shares, comments: user.activity.friday.comments}
    // ]


const BarChartComp = ({data}) => {
  const [ days, setDays ] = useState(null);

  useEffect( ()=> {
    axios.get(process.env.REACT_APP_BACKEND_DATA_WEEKLY)
      .then(res => {
        let weeklyResponse = res.data.wekdays[0].days

        weeklyResponse.Monday.name = 'Monday';
        weeklyResponse.Tuesday.name = 'Tuesday';
        weeklyResponse.Wednesday.name = 'Wednesday';
        weeklyResponse.Thursday.name = 'Thursday';
        weeklyResponse.Friday.name = 'Friday';
        
        setDays([ weeklyResponse.Monday, weeklyResponse.Tuesday, weeklyResponse.Wednesday, weeklyResponse.Thursday, weeklyResponse.Friday ])
      })   
      .catch(err => console.log(err))
  },[])
  
    return (
      <div className="h-full">
        <h1 className="font-bold text-xl mb-6">Your Community Impact</h1>
        <div className="flex justify-center">
          <BarChart margin={{ top: 30, right: 30, left: 0, bottom: 10 }} width={650} height={350} data={data ? data : days}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="posts" stackId="a" fill="#8884d8" />
              <Bar dataKey="shares" stackId="a" fill="#82ca9d" />
              <Bar dataKey="comments" stackId="a" fill="#ffc658" />
          </BarChart>
        </div>
      </div>
    )
}
  


export default BarChartComp
