import React from 'react'

const NavBar = () => {
  return (
    <div className="w-full sticky flex justify-between items-center px-7 py-2 bg-white border-b-1">
      <img style={{ height: 38 }} src={process.env.PUBLIC_URL + '/fullBrainLogo.png'} alt="FullBrainLogo" />
    </div>
  )
}

export default NavBar