import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    skills: state.skills.skills
  };
};

export default connect(
  mapStateToProps
);
