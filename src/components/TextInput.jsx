import React from 'react'

const TextInput = ({label,type}) => {
  return (
    <div className='w-full md:w-[70%]'>
        <label >{label}</label>
        <input type={type} className='h-10' />
    </div>
  )
}

export default TextInput