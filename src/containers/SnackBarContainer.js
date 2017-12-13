import { connect } from 'react-redux';
import Snack from '../components/Snack';
import { hideSnackBar } from '../actions'

const mapStateToProps = (state) => {
  return {
    snackbar: state.snackbar
  }
}

const mapDispatchToProps = (dispatch) => ({
  hideSnackBar: () => dispatch(hideSnackBar())
})

export default connect(mapStateToProps, mapDispatchToProps)(Snack)