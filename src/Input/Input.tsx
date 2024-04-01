import React from "react"

interface Iinput {
    onSend: () => void,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Input = ({ onSend, onChange }: Iinput) => {
  return (
    <div className='card-insert'>
        <h3 className='title'>New note</h3>
        <textarea name="input-text" id="input-text" onChange={onChange}/>
        <button className='send-btn' onClick={onSend}>
        </button>
    </div>
  )
}
