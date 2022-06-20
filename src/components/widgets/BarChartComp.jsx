import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

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
        <div style={{display: 'flex', justifyContent:'ceneter', alignItems:'center'}}>
          <h1 className="font-bold">Activity</h1>
        </div>
        <BarChart margin={{ top: 30, right: 30, left: 0, bottom: 10 }} width={650} height={350} data={data ? data : days}>
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
