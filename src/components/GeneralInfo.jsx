import React, { useState } from 'react'
import "../styles/generalInfo.css";
const GeneralInfo = ({generalInfo , setGeneralInfo}) => {
    const [edit,setEdit]=useState(true);


    function handleChange(e){
        setGeneralInfo({...gernalInfo ,[e.target.name]:e.target.value});
    }




  return (
    <div className='section'>
        <h1>Your General Information</h1>

        {edit ?(
            <>
                <input name='name' value={generalInfo.name} placeholder='Enter your name' onChange={handleChange}/>
                <input name='email' value={generalInfo.email} onChange={handleChange} placeholder='Enter your email'/>
                <input name='phoneNumber' value={generalInfo.phoneNumber} onChange={handleChange} placeholder='Enter your phone number'/>
                <button onClick={()=>setEdit(false)}>Submit</button>

            </>
        ):(
            <>
                <p>Name: {generalInfo.name}</p>
                <p>Email: {generalInfo.email}</p>
                <p>Phone Number: {generalInfo.phoneNumber}</p>
                <button onClick={()=>setEdit(true)}>Edit</button>
            </>
        )}
    </div>
  )
}

export default GeneralInfo