import React from "react";
import "./SkillSection.style.scss";

const colors = ["#f6efed", "#ffe1be", "#f7be6c", "#ff8100", "#d86d00"]

const SkillSection = ({ skill }) => {

  const activePosition = Math.trunc((skill.score * 100) / 20);

  const endorsedBy = skill.endorsed_by.users.map((user) => user.name.full);
  let endorsedString = endorsedBy.map((item, index) => {
    if (index < 3) {
      if (index === endorsedBy.length - 1)
        return item;
      return item + ", ";
    }
  }).reduce((a, b) => a + b);

  const diff = skill.endorsed_by.total_count - 3;
  if (diff > 0) {
    endorsedString = endorsedString + " and " + diff + " other" + (diff > 1 ? "s" : "");
  }

  console.log(endorsedString);

  return (
    <div className='skill-section'>
      <h2 className='skill-section__skill-name'>{skill.skill_name}</h2>

      <ul className="rating-color">
        {colors.map((color, index) => {
          return <li key={index}>
            <span style={{background: color}} className={`${index === activePosition ? "active" : ""}`}/>
          </li>;
        })};
      </ul>

      <div className='skill-section__endorsement-section'>
        <span>{endorsedString}</span>
      </div>
    </div>
  );
};

export default SkillSection;
