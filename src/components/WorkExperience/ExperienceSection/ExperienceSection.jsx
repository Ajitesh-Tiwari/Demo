import React from "react";
import "./ExperienceSection.style.scss";

const ExperienceSection = ({ workExperience }) => {
  return (
    <div className='work-experience'>
      <div className='work-experience__details'>
        <div className='work-experience__details__left'>
          <img src={workExperience.company.logo_url}/>

          <div className='work-experience__main'>
            <h3 className='mb-0'>{workExperience.company.name}</h3>
            <h2 className='mb-0'>{workExperience.designation}</h2>
            <h5>{`${workExperience.start_date}-${workExperience.end_date}, ${workExperience.duration}`}</h5>
          </div>

        </div>
        <div className='work-experience__details__right'>
          <h5>Peer verified</h5>
          <h5>Company verification
            pending</h5>
        </div>
      </div>

      {
        workExperience.description &&
        <div className='work-experience__description'>
          <h5>{workExperience.description}</h5>
        </div>
      }

      {
        workExperience.skills_data.length > 0 &&
        <div className='work-experience__worked-on'>
          <h2 className='mb-0'>WORKED ON</h2>
          <div className='work-experience__worked-on__main'>
            {workExperience.skills_data.map((skill, index) => {
              return <div key={index} className='work-experience__worked-on__skill'>
                <span>{skill.skill_name}</span>
              </div>;
            })}
          </div>
        </div>
      }
    </div>
  );
};

export default ExperienceSection;
