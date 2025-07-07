import React, { use, useState } from 'react'
import "../styles/experience.css";
const Experience = ({experience,setExperience}) => {

    const [edit,setEdit]=useState(true);

    const handleChange = (e) => {

        setExperience({...experience, [e.target.name]: e.target.value});

    }


  return (

    <div className='section'>
        <h1>Experience</h1>
        {edit ?(
            <>
            <input name='company' value={experience.company} onChange={handleChange} placeholder='Your company name'/>
            <input name='position' value={experience.position} onChange={handleChange} placeholder='Your position'/>
            <input name='responsibilities' value={experience.responsibilities} onChange={handleChange} placeholder='Your responsibilities'/>
            <input name='from' value={experience.from} onChange={handleChange} placeholder='From date'/>
            <input name='to' value={experience.to} onChange={handleChange} placeholder='To date'/>
            <button onClick={()=>setEdit(false)}>Submit</button>
            </>
        ):(
            <>
            <p>Company: {experience.company}</p>
            <p>Position: {experience.position}</p>
            <p>Responsibilities: {experience.responsibilities}</p>
            <p>From: {experience.from}</p>
            <p>To: {experience.to}</p>
            <button onClick={()=>setEdit(true)}>Edit</button>
            </>
                )
            
        }
        
    </div>
  )
}


export default Experience