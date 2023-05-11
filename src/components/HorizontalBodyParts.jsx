import React from 'react'
import BodyPart from './BodyPart'

const HorizontalBodyParts = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          className='body-part-item'
        >
          <BodyPart item = {item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </div>
        ))}
    </div>
  )
}

export default HorizontalBodyParts
