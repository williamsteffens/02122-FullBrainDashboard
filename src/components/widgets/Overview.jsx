import React from 'react'
import BarChartComp from './BarChartComp'
import RadarChartComp from './RadarChartComp'
import { ResponsiveContainer } from 'recharts'

const Overview = () => {
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
    <div>
      <div>          
          <div className="flex mx-10 flex-wrap justify-center gap-6 items-cente">
            <div className="p-4 shrink-0 w-[700px] rounded-xl bg-white shadow-lg"> <BarChartComp></BarChartComp> </div>
            <div className="p-4 shrink-0 w-[700px] rounded-xl bg-white shadow-lg"> <RadarChartComp></RadarChartComp> </div>
            <div className="p-4 shrink-0 w-[700px] rounded-xl bg-white shadow-lg"> Hey </div>
            <div className="p-4 shrink-0 w-[700px] rounded-xl bg-white shadow-lg"> Hey </div>
          </div>
      </div>
    </div>
  )
}

export default Overview