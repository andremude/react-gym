import React from 'react'

const HorizontalBodyParts = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          className='body-part-item'
        >
          {item}
        </div>
        ))}
    </div>
  )
}

export default HorizontalBodyParts
