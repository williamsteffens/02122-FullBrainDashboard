import React, { useState } from 'react';
import {RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend} from 'recharts';

const RadarChartComp = () => {

    let STEAM = [
      {
        "subject": "Science",
        "A": 60,
        "B": 95
      },
      {
        "subject": "Technology",
        "A": 70,
        "B": 90
      },
      {
        "subject": "Engineering",
        "A": 80,
        "B": 90
      },
      {
        "subject": "Arts",
        "A": 30,
        "B": 20
      },
      {
        "subject": "Maths",
        "A": 60,
        "B": 70
      }
    ];

    let Math = [
      {
        "subject": "Discrete Maths",
        "A": 80,
        "B": 90,
        "fullMark": 150
      },
      {
        "subject": "Calculus",
        "A": 60,
        "B": 90,
        "fullMark": 150
      },
      {
        "subject": "Linear Algebra",
        "A": 50,
        "B": 70,
        "fullMark": 150
      },
      {
        "subject": "Statistics",
        "A": 90,
        "B": 60,
        "fullMark": 150
      },
      {
        "subject": "Cryptology",
        "A": 85,
        "B": 55,
        "fullMark": 150
      }
    ];

    let Prog = [
      {
        "subject": "OOP",
        "A": 100,
        "B": 90,
        "fullMark": 150
      },
      {
        "subject": "Logical Prog.",
        "A": 20,
        "B": 50,
        "fullMark": 150
      },
      {
        "subject": "Functionl Prog.",
        "A": 50,
        "B": 80,
        "fullMark": 150
      },
      {
        "subject": "Scripting",
        "A": 90,
        "B": 50,
        "fullMark": 150
      },
      {
        "subject": "Procedural Prog.",
        "A": 85,
        "B": 30,
        "fullMark": 150
      }
    ];


    const [radarStats, setRadarStats] = useState(STEAM);
    const [currRadar, setCurrRadar] = useState("steam");

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
            <div className="flex flex-col">
              <h1 className="font-semibold text-xl">Filter - Selection</h1>
              <div className="flex flex-col border-2 rounded-md p-3 space-y-1">
                <button className="radarButton" style={currRadar == "steam" ? { backgroundColor: "#d9d9d9" } : {}} onClick={() => setSteamStats()}>
                  STEAM
                </button>
                <button className='radarButton' style={currRadar == "math" ? { backgroundColor: "#d9d9d9" } : {}} onClick={() => setMathStats()}>
                  Math
                </button>
                <button className='radarButton' style={currRadar == "prog" ? { backgroundColor: "#d9d9d9" } : {}} onClick={() => setProgStats()}>
                  Programming
                </button>
              </div>
            </div> 
            
            <div>
              <RadarChart outerRadius={100} width={600} height={250} data={radarStats}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <Radar name="Average" dataKey="B" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="You" dataKey="A" stroke="#ECB742" fill="#ECB742" fillOpacity={0.6} />
                <Legend wrapperStyle={{position: 'relative', marginTop: '20px'}} />
              </RadarChart>
            </div>

            <div className="flex flex-col">
              <h1 className="font-semibold text-xl">Recommendations</h1>
              <div className="flex flex-col border-2 rounded-md p-3 space-y-1">
                {currRadar === "steam" ? (
                  <>
                    <div className="radarButton flex flex-col border-2 rounded-md p-3 space-y-1">
                      Science - Course
                    </div>
                    <div className="radarButton flex flex-col border-2 rounded-md p-3 space-y-1">
                      Technology - Course
                    </div>
                    <div className="radarButton flex flex-col border-2 rounded-md p-3 space-y-1">
                      Engineering - Course
                    </div>
                    <div className="radarButton flex flex-col border-2 rounded-md p-3 space-y-1">
                      Maths - Course
                    </div>
                  </>
                ) : ""}
                {currRadar === "math" ? (
                  <>
                    <div className="radarButton flex flex-col border-2 rounded-md p-3 space-y-1">
                      Discrete Math - Course
                    </div>
                    <div className="radarButton flex flex-col border-2 rounded-md p-3 space-y-1">
                      Calculus - Course
                    </div>
                    <div className="radarButton flex flex-col border-2 rounded-md p-3 space-y-1">
                      Linear Algebra - Course
                    </div>
                  </>
                ) : ""}
                {currRadar === "prog" ? (
                  <>
                    <div className="radarButton flex flex-col border-2 rounded-md p-3 space-y-1">
                      Logic Prog - Course
                    </div>
                    <div className="radarButton flex flex-col border-2 rounded-md p-3 space-y-1">
                      Functional Prog - Course
                    </div>
                  </>
                ) : ""}
              </div>
            </div>
          </div>
      </div>
    )
}
  


export default RadarChartComp
