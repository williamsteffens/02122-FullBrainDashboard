import React, { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import BarChartPersonal from '../charts/BarChartPersonal';
import LoadingSpinner from './LoadingSpinner';
import ListItem from './ListItem';

const PersonalList = ({data, personalBarChart, overview}) => {

    const handleListItems = () => {
        return (
            <>
                <ListItem data={{name: 'Likes Received', value: data['Likes received'], threshold: 1000 }} />
                <ListItem data={{name: 'Questions Asked', value: data['Questions asked'], threshold: 50}} />
                <ListItem data={{name: 'Shared Posts', value: data['Shared posts'], threshold: 100}} />
                <ListItem data={{name: 'Shared Resources', value: data['Shared resources'], threshold: 200 }} />
            </>
        )
    }

    return (
        <div className="flex justify-between w-full items-center justify-between">
            <div className="flex flex-col milestones border border-gray-300 p-5 rounded-lg">
                <div className="flex justify-between mb-5 w-full items-center">
                    <h5 className="font-bold">Milestones</h5>
                    <div className="flex text-sm text-slate-500 items-center justify-center">
                        <span className="border border-slate-500 rounded-lg p-2 cursor-pointer">View my milestones </span>
                        <BiDotsVerticalRounded fontSize={20} className="cursor-pointer"/>
                    </div>
                </div>
                <ul className="h-full overflow-auto">
                    {data ? handleListItems() : <LoadingSpinner/>}
                </ul>
            </div>
            <div className="flex">
                {!overview ? <BarChartPersonal data={personalBarChart}/> : ''}
            </div>
        </div>
    )
}

export default PersonalList;