import React, { useState } from 'react'
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import "../src/styles/App.css"

const App = () => {
   
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email:'',
    phoneNumber:''
  });

  const [education,setEducation] = useState({
    school:'',
    study:'',
    date:''
  });

  const[experience,setExperience] = useState({
    company:'',
    position:'',
    responsibilities:'',
    from:'',
    to:''
  });




  return (
    <div>
      <h1>CV Builder</h1>
    <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}/>
    <Education education={education} setEducation={setEducation}/>
    <Experience experience={experience} setExperience={setExperience}/>

    </div>
  )
}

export default App