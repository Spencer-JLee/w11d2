import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    steps: Object.values(state.steps),
  })
}