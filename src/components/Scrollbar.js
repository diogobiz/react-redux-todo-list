import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Scrollbars } from 'react-custom-scrollbars';

const Scrollbar = ({ muiTheme, ...rest }) => {
  const thumbStyle = {
    backgroundColor: muiTheme.palette.primary1Color,
    borderRadius: 3
  }
  return (
    <Scrollbars
      renderThumbVertical={(style) => <div style={thumbStyle} />}
      {...rest}
    />
  )
}

export default muiThemeable()(Scrollbar)