import React, { useState } from 'react'

const PasswordValidation = () => {

    const [input,SetInput] = useState('');
    const [error, SetError] = useState('');

    const handleChange = (e)=>{
        const inputValue = e.target.value;
        let isValid = true;
        //console.log(inputValue)

        for(let i=0;i<inputValue.length;i++){
            if(inputValue[i]<'0' || inputValue[i]>'9'){
                isValid=false;
                break;
            }
        }

        if(isValid){
            SetInput(inputValue)
            SetError('')
        }
        else{
            SetError('Enter value between 0 - 9')
        }


    }
  return (
    <div>
        <div>
            <h2 className='font-bold ml-2'>Q.Create an input box that only allows numbers (0-9). If the user types a letter, show an error message.</h2>
            <input type='text' className='border border-black m-2 p-2' value={input} onChange={handleChange}/>
            {error && <p>Enter value between 0 - 9</p>}
        </div>
    </div>
  )
}

export default PasswordValidation