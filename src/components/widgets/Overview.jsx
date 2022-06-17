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
console.log(process.env.REACT_APP_BACKEND_DATA)
  useEffect( ()=> {
    axios.get(process.env.REACT_APP_BACKEND_DATA, {crossDomain: true})
      .then(res => {
        console.log("REST")
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
      })
      .catch( err => console.log(err))
  },[])

  return (
    /*<div class="bg-amber-300 p-8">
      <div class="grid grid-cols-12 gap-6">
        <div class="justify-center col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-150">
          <ResponsiveContainer width="95%" height="95%">
            <BarChartComp></BarChartComp>
          </ResponsiveContainer>
        </div>
        <div class="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-150"></div>
      </div>
    </div>*/
    <div className="flex flex-wrap justify-center items-center">
            <div className="mr-4 mb-4 p-3 shrink-0 w-[700px] rounded-xl bg-white shadow-lg overview-card overflow-auto"> <BarChartComp></BarChartComp> </div>
            <div className="mb-4 p-3 shrink-0 w-[700px] rounded-xl bg-white shadow-lg overview-card overflow-auto"> <RadarChartComp></RadarChartComp> </div>
            <div className="mr-4 mb-4 p-3 shrink-0 w-[700px] rounded-xl bg-white shadow-lg overview-card-2nd-row overflow-auto"> <Milestones overview></Milestones> </div>
            <div className="mb-4 p-3 shrink-0 w-[700px] rounded-xl bg-white shadow-lg overview-card-2nd-row overflow-auto"> <NetworkComp overview></NetworkComp> </div>
            <div className="mt-2 p-3 shrink-0 w-[1400px] rounded-xl bg-white shadow-lg h-140 overflow-auto">   {tally ? <LeaderBoard data={tally} overview/> : <LoadingSpinner/>}</div>
    </div>
  )
}

export default Overview