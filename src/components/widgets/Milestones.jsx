import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GroupList from '../ui/GroupList';
import PersonalList from '../ui/PersonalList';
import companyLogo from '../assets/placeholder_image.jpeg';

const dummy_data = [
  {name: 'Person 1', description: 'Test description', date: 'Unlocked dd-mm-yyy @ hh-mm', message: '69% of Full brain have unlocked this message', progress: 'x/y', image: companyLogo },
  {name: 'Person 2', description: 'Test description', date: 'Unlocked dd-mm-yyy @ hh-mm', message: '69% of Full brain have unlocked this message', progress: 'x/y', image: companyLogo},
  {name: 'Person 3', description: 'Test description', date: 'Unlocked dd-mm-yyy @ hh-mm', message: '69% of Full brain have unlocked this message', progress: 'x/y', image: companyLogo},
  {name: 'Person 4', description: 'Test description', date: 'Unlocked dd-mm-yyy @ hh-mm', message: '69% of Full brain have unlocked this message', progress: 'x/y', image: companyLogo},
  {name: 'Person 5', description: 'Test description', date: 'Unlocked dd-mm-yyy @ hh-mm', message: '69% of Full brain have unlocked this message', progress: 'x/y', image: companyLogo},
]

const Milestones = ({overview}) => {

  const [userId,setUserId] = useState(9904)
  const [userDetails, setUserDetails] = useState(null);
  const [datasets, setDatasets] = useState(null);
  const [personalBarChart, setPersonalBarChart] = useState(null);
  const [view, setView] = useState('personal');

  useEffect( ()=> {
    axios.get(process.env.REACT_APP_BACKEND_DATA)
      .then(res => {
        let userList = res.data.users;
        let questionsTally = [];
        let likesTally = [];
        let sharedPostsTally = [];
        let sharedResourcesTally = [];
        let activityScores = [];

        userList.forEach(item => {
          questionsTally.push(item['Questions asked']);
          likesTally.push(item['Likes received']);
          sharedPostsTally.push(item['Shared posts']);
          sharedResourcesTally.push(item['Shared resources']);

          let average = Math.round((item['Questions asked']+item['Shared posts']+item['Shared resources']+item['Likes received'])/ 40)
          let score = (average/100) * 100

          if(item['Likes received']<500){
            score = Math.round(score * 1.3,0)
          }

          activityScores.push(score)
        })

        for(var i=0; i<userList.length; i++){
          userList[i].activityScore = activityScores[i]
        }

        setDatasets(userList.sort( (a,b) => b.activityScore - a.activityScore ))
        
        let personalDetails = (userList.find(user => user.user_ID === userId ))
        
        setPersonalBarChart([
          {name: "Questions Asked",  value: personalDetails['Questions asked'], threshold: 500},
          {name: "Likes Received", value: personalDetails['Likes received'], threshold: 1000},
          {name: "Shared Posts", value: personalDetails['Shared posts'], threshold: 400},
          {name: "Shared Resources", value: personalDetails['Shared resources'], threshold: 100}]
        )
        setUserDetails(personalDetails)
      })

      .catch(err => console.error(err));
  },[])

  const handlePersonalView = () => {
    setView('personal');
  }

  const handleGroupView = () => {
    setView('group');
  }

  return (
    <div className="flex flex-col w-full">
        {!overview ? <div className="flex justify-end button-group w-full">
            <button 
              className={`${view==='personal' ? 'button-background-color-purple' : 'button-background-color-gray'} hover:bg-violet-700 text-white font-bold py-2 px-4 rounded mr-2`}
              onClick={handlePersonalView}>
                Personal
            </button>
            <button 
              className={`${view==='group' ? 'button-background-color-purple' : 'button-background-color-gray'} hover:bg-violet-700 text-white font-bold py-2 px-4 rounded`}
              onClick={handleGroupView}>
                Group
            </button>
        </div> : ''}
        <div className="flex flex-col w-full items-center justify-center">
          {view=='personal' ? <PersonalList data={userDetails} personalBarChart={personalBarChart} overview={overview}/>  : <GroupList data={datasets} overview={overview}/>}
        </div>
    </div>
  )
}

export default Milestones