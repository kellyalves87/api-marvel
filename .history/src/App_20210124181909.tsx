import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#EC1D23', 
    color: '#ffffff',
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 'bolder',
    lineHeight: '16px',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <Typography variant="h1">MARVEL API</Typography>
    </div>
  );
}

export default App;
