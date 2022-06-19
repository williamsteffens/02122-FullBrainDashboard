import React, { useState } from 'react';
import companyLogo from '../assets/placeholder_image.jpeg';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import BarChart from '../charts/BarChart';
import ProgressBar from '../charts/ProgressBar';
import LoadingSpinner from './LoadingSpinner';

const GroupList = ({data, overview}) => {
    const [barChartDetails, setBarChartDetails] = useState(null);
    console.log(overview)
    const handleOnClick = (data) => {
        setBarChartDetails([
            { name: "Questions Asked",  value: data['Questions asked']},
            {name: "Likes Received", value: data['Likes received']},
            {name: "Shared Posts", value: data['Shared posts']},
            {name: "Shared Resources", value: data['Shared resources']}]
        )
    };

    return (
        <div className="flex flex-start items-center">
            <div className="flex flex-col milestones border border-gray-300 p-5 rounded-lg">
                <div className="flex justify-between mb-5 w-full items-center">
                    <h5 className="font-bold">Milestones</h5>
                    <div className="flex text-sm text-slate-500 items-center justify-center">
                        <span className="border border-slate-500 rounded-lg p-2 cursor-pointer">View my milestones </span>
                        <BiDotsVerticalRounded fontSize={20} className="cursor-pointer"/>
                    </div>
                </div>
                    <ul className="h-full overflow-auto">
                        {data ? data.map((item,index) => {
                            // const progress = `${Math.round(item.value/item.threshold*100)}`
                            return (
                            <div key={index}>
                                <li className="flex border border-gray-300 rounded-md h-28 list-item cursor-pointer" onClick={()=>handleOnClick(item)}>
                                    <img src={companyLogo} alt={companyLogo} className="ml-3 list-image"/>
                                    <div className="details-container w-full h-full p-2">
                                        <div className="text-containers flex w-full justify-between mb-4 ml-4">
                                            <div className="text-containers-headers flex ml-6 mr-2 w-full">
                                                <div className="flex flex-col w-full">
                                                    <h5 className="text-lg font-medium milestone-header">{item.Name}</h5>
                                                    <h6 className="text-base milestone-description">{"Test description"}</h6>
                                                </div>
                                            </div>
                                            <div className="text-containers-headers-details flex flex-col grid grid-cols-1 divide-y mr-5 ">
                                                <div className="font-light text-slate-500">{"Unlocked dd-mm-yyy @ hh-mm"}</div>
                                                <div className="font-light text-slate-500">{"69% of Full brain have unlocked this message"}</div>
                                            </div>
                                        </div>

                                        <div className="chart-containers flex">
                                            <div className="flex  list-item-chart-progress-bar w-80"> 
                                                <ProgressBar bgcolor="#7D61E3" progress={`${item.activityScore}`} height={20}/>
                                            </div>
                                            <div className="ml-3 text-sm">{`${item.activityScore}/3000`}</div>
                                        </div>
                                    </div>
                                </li>
                            </div> )}
                        ) : <LoadingSpinner/>}
                    </ul>
                </div>
            <div>
                {!overview ? <BarChart data={barChartDetails}/> : ''}
            </div>
        </div>
    )
}

export default GroupList;