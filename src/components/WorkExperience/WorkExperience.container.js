import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    work: state.work
  };
};

export default connect(
  mapStateToProps
);
