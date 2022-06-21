import { React, useEffect, useState } from 'react';
import {RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend} from 'recharts';

const RadarChartComp = ({ user, users }) => {

    const [radarStats, setRadarStats] = useState([]);
    const [currRadar, setCurrRadar] = useState("steam");


    let STEAM = [
      {
        "subject": "Science",
        "A": 10,
        "B": 50,
        "fullMark": 150
      },
      {
        "subject": "Technology",
        "A": 98,
        "B": 60,
        "fullMark": 150
      },
      {
        "subject": "Engineering",
        "A": 86,
        "B": 90,
        "fullMark": 150
      },
      {
        "subject": "Arts",
        "A": 99,
        "B": 10,
        "fullMark": 150
      },
      {
        "subject": "Maths",
        "A": 85,
        "B": 60,
        "fullMark": 150
      }
    ];

    let Math = [
      {
        "subject": "Discrete Maths",
        "A": 30,
        "B": 30,
        "fullMark": 150
      },
      {
        "subject": "Calculus",
        "A": 30,
        "B": 30,
        "fullMark": 150
      },
      {
        "subject": "Linear Algebra",
        "A": 30,
        "B": 30,
        "fullMark": 150
      },
      {
        "subject": "Statistics",
        "A": 99,
        "B": 30,
        "fullMark": 150
      },
      {
        "subject": "Cryptology",
        "A": 85,
        "B": 30,
        "fullMark": 150
      }
    ];

    let Prog = [
      {
        "subject": "OOP",
        "A": 120,
        "B": 30,
        "fullMark": 150
      },
      {
        "subject": "Logical Prog.",
        "A": 98,
        "B": 30,
        "fullMark": 150
      },
      {
        "subject": "Functionl Prog.",
        "A": 86,
        "B": 30,
        "fullMark": 150
      },
      {
        "subject": "Scripting",
        "A": 99,
        "B": 30,
        "fullMark": 150
      },
      {
        "subject": "Procedural Prog.",
        "A": 85,
        "B": 30,
        "fullMark": 150
      }
    ];

    const setSteamStats = () => {
      setRadarStats(STEAM);
      setCurrRadar("steam");
    }    

    const setMathStats = () => {
      setRadarStats(Math);
      setCurrRadar("math");
    }

    const setProgStats = () => {
      setRadarStats(Prog);
      setCurrRadar("prog");
    } 
    

    return (
      <div className="h-full">
          <h1 className="font-bold text-xl mb-6">Your Knowledge Distribution</h1>
          <div className="flex flex-row m-auto justify-center">
            <div className="menu flex flex-col">
              <h1>Selection</h1>
              <button onClick={() => setSteamStats()}>
                STEAM
              </button>
              <button onClick={() => setMathStats()}>
                Math
              </button>
              <button onClick={() => setProgStats()}>
                Programming
              </button>
            </div> 
            
            <div>
              <RadarChart outerRadius={100} width={600} height={250} data={radarStats}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <Radar name="Average" dataKey="B" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="keven" dataKey="A" stroke="#ECB742" fill="#ECB742" fillOpacity={0.6} />
                <Legend wrapperStyle={{position: 'relative', marginTop: '20px'}} />
              </RadarChart>
            </div>

            <div className="recommendation">
              <h1>Recommendations</h1>
              {currRadar === "steam" ? (<h1>I have aids</h1>) : (<h1>No aids</h1>)}
            </div>
          </div>
      </div>
    )
}
  


export default RadarChartComp
