import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './TopBar.css'

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
  title: {
    fontSize: '1.2rem',
    color: 'black',
    
    fontWeight: 'bold',
    flexGrow: 1,
  },
}));

export default function TopBar({ setOpen }) {
  //const classes = useStyle();
  return (
    <div>
      <Typography className='planTitle'>Daily Trello</Typography>
    </div>
  );
}