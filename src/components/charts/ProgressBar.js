import React from 'react'
  
const Progress_bar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#A9A9A9',
        borderRadius: 40,
        margin: 0
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }
      
      const progresstext = {
        padding: 10,
        color: 'white',
        fontWeight: 500,
        fontSize: 12,
      }

    return (
    <div style={Parentdiv}>
        <div style={Childdiv}/>
        <div style={progresstext}>{`${progress}%`}</div>
    </div>
    )
}
  
export default Progress_bar;