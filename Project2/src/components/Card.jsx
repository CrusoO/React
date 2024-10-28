import React from 'react'

const Card = ({isActive,children,title,onShow}) => {
  
  return (
    <div>
        {isActive?(<p>{children}</p>):(<button onClick={onShow}>Show</button>)}
    </div>
  )
}

export default Card
