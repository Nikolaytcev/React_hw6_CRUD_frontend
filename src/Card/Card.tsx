import React from 'react'

interface Icard {
    id: number,
    text: string,
    onDelte: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Card = ({ id, text, onDelte }: Icard) => {
  return (
    <div className='card' id={id.toString()}>
        <div className='card-text'>
          <p>{text}</p>
        </div>
        <button className='delete-btn' onClick={onDelte}></button>
    </div>
  )
}
