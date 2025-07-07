import React, { useState } from 'react';
import "../styles/education.css";

const Education = ({ education, setEducation }) => {
  const [edit, setEdit] = useState(true);

  function handleChange(e) {
    setEducation({ ...education, [e.target.name]: e.target.value });
  }

  return (
    <div className='section'>
      <h1>Education</h1>

      {edit ? (
        <>
          <input
            name='school'
            value={education.school}
            onChange={handleChange}
            placeholder='Your school name'
          />
          <input
            name='study'
            value={education.study}
            onChange={handleChange}
            placeholder='Your field of study'
          />
          <input
            name='date'
            value={education.date}
            onChange={handleChange}
            placeholder='Your graduation date'
          />
          <button onClick={() => setEdit(false)}>Submit</button>
        </>
      ) : (
        <>
          <p>School: {education.school}</p>
          <p>Study: {education.study}</p>
          <p>Date: {education.date}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Education;
