import React from "react";
import "./EducationSection.style.scss";

const   EducationSection = ({ education }) => {

  return (
    <div className='education-section'>
      <h5>{education.institution_name}</h5>
      <h2>{education.course + '-' + education.department}</h2>
      <p>{education.score}</p>
      <p>{education.start_date + '-' + education.end_date}</p>
    </div>
  );
};

export default EducationSection;
