import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  textAlign: 'left',
  display: 'inline-block',
  whiteSpace: 'nowrap',
  padding: '20px',
  minWidth: '335px'
};

const Player = ({ player }) => (
  <Paper style={style} zDepth={1}>
    Name: {player.name} <br />
    Account Status: {player.accountStatus} <br />
    Achievement Points: {player.achievementPoints} <br />
    Last Login: {player.lastLogin} <br />
    Level: {player.level} <br />
    Residence: {player.residence} <br />
    Sex: {player.sex} <br />
    Vocation: {player.vocation} <br />
    World: {player.world} <br />
  </Paper>
)

export default Player