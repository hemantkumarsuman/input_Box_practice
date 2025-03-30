import React, { useState } from 'react'

const EmailValidator = () => {
    const [input,SetInput] = useState('');
    const [error,SetError] = useState('');

    const handleClick = (e)=>{
        if(!input.includes('@') || !input.includes('.com')){
            SetError(`Invalid email. Make sure it contains '@' and '.com'`)
        }
        else{
            alert('Email is valid');
            SetError('')
        }

    }
  return (
    <div>
        <div>
            <h2 className='font-bold ml-2'> Q.Build a simple email validator that checks if an email contains @ and .com. Without Use regex </h2>
            <input type='text' className='border border-black m-2' onChange={(e)=>SetInput(e.target.value)}/>
            <button className='border border-black m-2' onClick={handleClick}>Submit</button>
            {error && <p>{error}</p>}
        </div>
    </div>
  )
}

export default EmailValidator