import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const Snack = ({ snackbar, hideSnackBar }) => {

  return (
    <Snackbar
      open={snackbar.open}
      message={snackbar.message}
      action="close"
      onActionClick={hideSnackBar}
      autoHideDuration={4000}
      onRequestClose={hideSnackBar}
    />
  )
}

export default Snack