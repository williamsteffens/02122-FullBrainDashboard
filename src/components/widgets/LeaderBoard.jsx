import React, { useState, useEffect } from 'react';
import companyLogo from '../assets/placeholder_image.jpeg';
import ProgressBar from '../charts/ProgressBar';

const LeaderBoard = ({data, overview}) => {
    
    let rank = 0

    const handleRank = () => {
        rank++
    }

    return (
        <>
        {!overview ? '' : 
        <div style={{display: 'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <h1 className="font-bold">Leaderboards</h1>
        </div>}
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 leaderboard-main">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full">
                <thead className="border-b leaderboard-table-header">
                    <tr>
                    <th scope="col" className="text-sm font-medium text-gray-500 px-6 py-4 text-left"  style={{width: '0.1rem'}}>
                        Rank
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left" style={{width: '45rem'}}>
                        
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-500 px-6 py-4 text-left" style={{width: '40rem'}}>
                        Activity Score
                    </th>
                    <th scope="col" className="text-sm font-medium leaderboard-text-color-purple px-6 py-4 text-left">
                        Likes
                    </th>
                    <th scope="col" className="text-sm font-medium leaderboard-text-color-purple px-6 py-4 text-left">
                        Shared Posts
                    </th>
                    <th scope="col" className="text-sm font-medium leaderboard-text-color-purple px-6 py-4 text-left">
                        Questions Asked
                    </th>
                    <th scope="col" className="text-sm font-medium leaderboard-text-color-purple px-6 py-4 text-left">
                        Shared Resources
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data ? data.map( (item,index) => {
                            
                            handleRank()
                            return(
                            <tr className="border-b bg-white" key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-small text-gray-500">
                                    {rank}
                                </td>
                                <td className="text-sm leaderboard-text-color-purple font-bold px-6 py-4 whitespace-nowrap flex items-center">
                                    <img src={companyLogo} alt={companyLogo} className="leaderboard-avatar"/>{item['Name']}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <ProgressBar bgcolor="#7D61E3" progress={`${item.activityScore}`} height={20}/>
                                </td>
                                <td className="text-sm font-bold px-6 py-4 whitespace-nowrap">
                                    {item['Likes received']}
                                </td>
                                <td className="text-sm font-bold px-6 py-4 whitespace-nowrap">
                                    {item['Questions asked']}
                                </td>
                                <td className="text-sm font-bold px-6 py-4 whitespace-nowrap">
                                    {item['Shared posts']}
                                </td>
                                <td className="text-sm font-bold px-6 py-4 whitespace-nowrap">
                                    {item['Shared resources']}
                                </td>
                            </tr>)
                            }) : ''
                    }
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </>
    )
}

export default LeaderBoard;