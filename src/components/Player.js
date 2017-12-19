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
    <b>Name:</b> {player.name} <br />
    <b>Account Status:</b> {player.accountStatus} <br />
    <b>Achievement Points:</b> {player.achievementPoints} <br />
    <b>Last Login:</b> {player.lastLogin} <br />
    <b>Level:</b> {player.level} <br />
    <b>Residence:</b> {player.residence} <br />
    <b>Sex:</b> {player.sex} <br />
    <b>Vocation:</b> {player.vocation} <br />
    <b>World:</b> {player.world} <br />
  </Paper>
)

export default Player