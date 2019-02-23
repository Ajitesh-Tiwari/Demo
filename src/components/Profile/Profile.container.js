import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    profile: state.skills
  };
};

export default connect(
  mapStateToProps
);
