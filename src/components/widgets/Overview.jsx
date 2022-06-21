import React, {useState, useEffect} from 'react';
import axios from 'axios'
import BarChartComp from './BarChartComp';
import RadarChartComp from './RadarChartComp'
import Milestones from './Milestones'
import NetworkComp from './NetworkComp'
import LeaderBoard from './LeaderBoard'
import LoadingSpinner from '../ui/LoadingSpinner';

const Overview = () => {
  const [tally, setTally] = useState(null);
  const [days, setDays] = useState(null)
  const [currentUser, setCurrentUser] = useState(null);

  useEffect( ()=> {
    axios.get(process.env.REACT_APP_BACKEND_DATA)
      .then(res => {
        let users = (res.data.users)
        let activityScores = []
        
        users.forEach(user => {
          let average = Math.round((user['Questions asked']+user['Shared posts']+user['Shared resources']+user['Likes received'])/ 40)
          let score = (average/100) * 100

          if(user['Likes received']<500){
            score = score * 1.3
          }

          activityScores.push(Math.round(score,0))
        });

        for(var i=0; i<users.length; i++){
          users[i].activityScore = activityScores[i]
        }
      
        setTally(users.sort( (a,b) => b.activityScore - a.activityScore ))
        console.log(users[0]);
        setCurrentUser(users[0])
      })
      .catch( err => console.log(err))

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
    <div>
      <div className="flex flex-wrap justify-center items-center">
            <div className="mr-4 p-5 mb-4 shrink-0 w-[500px] overview-card overflow-auto"> <Milestones overview></Milestones> </div>
            <div className="mr-4 p-5 mb-4 shrink-0 w-[670px] overview-card overflow-auto"> <BarChartComp data={days}></BarChartComp> </div>
            <div className="mb-4 p-5 w-[1200px] overview-card overflow-auto"> <NetworkComp overview></NetworkComp> </div>
            <div className="mb-4 p-5 w-[1200px] overview-card overflow-auto"> <RadarChartComp></RadarChartComp> </div>
            {/*<div className="mt-2 p-3 shrink-0 w-[1400px] rounded-xl bg-white shadow-lg h-140 overflow-auto">   {tally ? <LeaderBoard data={tally} overview/> : <LoadingSpinner/>}</div>*/}
      </div>
    </div>
  )
}

export default Overview