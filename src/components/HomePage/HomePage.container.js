import { connect } from 'react-redux';
import { getSkillsData, getWorkData, getEducationData } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    getSkills: () => dispatch(getSkillsData()),
    getEducation: () => dispatch(getEducationData()),
    getWork: () => dispatch(getWorkData())
  };
};

export default connect(
  null,
  mapDispatchToProps
);
