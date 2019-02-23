import { connect } from 'react-redux';

const mapStateToProps = state => {
  console.log(state);
  return {
    work: state.work
  };
};

export default connect(
  mapStateToProps
);
