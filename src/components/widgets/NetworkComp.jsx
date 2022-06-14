import React from 'react'

// const friends = {
//   name: 
// };




const NetworkComp = ({ users }) => {
  return (
    <div>
      {users.map(user => 
        <div key={user.id}>{user.name}</div>
      )}
    </div>
  )
}

export default NetworkComp