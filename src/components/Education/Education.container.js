import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    education: state.education
  };
};

export default connect(
  mapStateToProps
);
