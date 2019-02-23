import React from "react";
import SkillSection from "./SkillSection";
import "./Skills.style.scss";

const Skills = ({ skills }) => {
  return (
    <div>
      {skills && <div className='skills'>
        <h4>Skills</h4>
        <div className='card'>
          <div className='skills__top'>
            <h2>Introducing Endorsements</h2>
            <a
              href="https://springrole.freshdesk.com/support/solutions/articles/43000433785-what-do-the-endorsement-colors-mean-"
              target="_blank">Learn more</a>
          </div>
          <div className='skills__card'>
            {skills && skills.map((skill, index) => {
                return <SkillSection key={index} skill={skill}/>;
              }
            )}
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default Skills;
