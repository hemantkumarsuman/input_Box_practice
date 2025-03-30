import React, { useState } from 'react'

const InputLengthValidation = () => {
    const [input,SetInput] = useState('');
    const [error,SetError] = useState('')

    const handleClick = (e)=>{
        
        
        console.log(input);
        

        if(input.length>8){
            SetInput(input)
            SetError('')
        }
        else{
            SetError('Length must be greater than 8')
        }
    }


  return (
    <div>
        <h3 className='font-bold ml-2'> Q.Create a password input field where users must enter at least 8 characters. If they click "Submit" with fewer characters, show an error message.</h3>
        <input type='text' className='border border-black m-2' value={input} onChange={(e)=>SetInput(e.target.value)}/>
        {<p>{error}</p>}
        <button onClick={handleClick} className='border border-black m-2'>Submit</button>
    </div>
  )
}

export default InputLengthValidation