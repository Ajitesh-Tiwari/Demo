import React from 'react';
import './Education.style.scss';
import EducationSection from './EducationSection';

const Education = ({ education }) => {
  const educationList = education.educationList;
  return (
    <div>
      {educationList && <div className='education'>
        <h4>Education</h4>
        <div className='card'>
          {educationList.map((educationItem, index) => {
            return <EducationSection education={educationItem} key={index}/>;
          })}
        </div>
      </div>
      }
    </div>
  );
};

export default Education;
