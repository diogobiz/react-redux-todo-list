import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Scrollbars } from 'react-custom-scrollbars';

const Scrollbar = ({ muiTheme, horizontal, ...rest }) => {
  const thumbStyle = {
    backgroundColor: muiTheme.palette.primary1Color,
    borderRadius: 3
  }

  const horizontalVisible = !horizontal ? { display: 'none' } : thumbStyle;
  return (
    <Scrollbars
      renderThumbVertical={(style) => <div style={thumbStyle} />}
      renderThumbHorizontal={(style) => <div style={horizontalVisible} />}
      {...rest}
    />
  )
}

export default muiThemeable()(Scrollbar)