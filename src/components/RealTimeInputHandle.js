import React, { useState } from 'react'

const RealTimeInputHandle = () => {
    const [input,SetInput] = useState('')
  return (
    <div>
        <div>
            <h2 className='font-bold ml-2'> Q.Create an input field where the text is displayed live in a tag as the user types.</h2>
            <input type='text' value={input} className='border border-black m-2' onChange={(e)=>SetInput(e.target.value)}/>
            <p className='text-blue-400'>`Start-`{input}</p>
        </div>
    </div>
  )
}

export default RealTimeInputHandle