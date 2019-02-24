import React, { Component } from 'react';
import Profile from "../Profile";
import Skills from "../Skills";
import WorkExperience from "../WorkExperience";
import Education from "../Education";

class HomePage extends Component {
  componentDidMount() {
    this.props.getSkills();
    this.props.getEducation();
    this.props.getWork();
  }

  render() {
    return (
      <div className='container'>
        <Profile/>
        <div className='row'>
          <div className='col-md-4 col-xs-12 order-md-12'>
            <Skills/>
          </div>
          <div className='col-md-8 mb50'>
            <WorkExperience/>
            <Education/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
