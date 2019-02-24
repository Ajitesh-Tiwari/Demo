import React from "react";
import ExperienceSection from "./ExperienceSection";
import "./WorkExperience.style.scss";

const WorkExperience = ({ work }) => {
  const workExperiences = work.work_experiences;
  return (
    <div>
      {workExperiences &&
      <div className='work'>
        <h4>Work Experience</h4>
        <div className='card'>
          <div className='work__card'>
            {workExperiences && workExperiences.map((workExperience, index) => {
                return <ExperienceSection key={index} workExperience={workExperience}/>;
              }
            )}
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default WorkExperience;
