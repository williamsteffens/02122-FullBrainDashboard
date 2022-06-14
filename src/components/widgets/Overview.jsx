import React from 'react'
import BarChartComp from './BarChartComp'
import { ResponsiveContainer } from 'recharts'

const Overview = () => {
  return (
    <div class="bg-amber-300 p-8">
      <div class="grid grid-cols-12 gap-6">
        <div class="flex flex-col col-span-full sm:col-span-7 bg-white shadow-lg rounded-sm border border-slate-200">
          <ResponsiveContainer width="95%" height="95%">
            <BarChartComp></BarChartComp>
          </ResponsiveContainer>
        </div>
        <div class="flex items-center justify-center rounded-md bg-cyan-400 p-4">2</div>
        <div class="flex items-center justify-center rounded-md bg-cyan-400 p-4">3</div>
        <div class="flex items-center justify-center rounded-md bg-cyan-400 p-4">4</div>
        <div class="flex items-center justify-center rounded-md bg-cyan-400 p-4">3</div>
        <div class="flex items-center justify-center rounded-md bg-cyan-400 p-4">4</div>
        <div class="flex items-center justify-center rounded-md bg-cyan-400 p-4">3</div>
        <div class="flex items-center justify-center rounded-md bg-cyan-400 p-4">4</div>
        <div class="flex items-center justify-center rounded-md bg-cyan-400 p-4">3</div>
        <div class="flex items-center justify-center rounded-md bg-cyan-400 p-4">4</div>
        <div class="flex items-center justify-center rounded-md bg-cyan-400 p-4">3</div>
        <div class="flex items-center justify-center rounded-md bg-cyan-400 p-4">4</div>
        <div class="flex items-center justify-center rounded-md bg-cyan-400 p-4">3</div>
        <div class="flex items-center justify-center rounded-md bg-cyan-400 p-4">4</div>
        
      </div>
    </div>
  )
}

export default Overview