import React from 'react'

const td = ({tl,dd}) => {
  return (
    <div>
      {tl.map((todoe,index)=><div key={index}><h3>{todoe} &nbsp; &nbsp; <button className='aj' onClick={()=>dd(index)}>Delete</button></h3></div>)}

    </div>
  )
}

export default td