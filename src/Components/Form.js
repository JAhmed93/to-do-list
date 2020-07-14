import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '70%',
  },
  inputButton: {
    width: '70%',
    margin: '3rem',
    background: '#673ab7',
    color: 'white',
  },
  boxStyle: {
    width: '70%',
    display: 'flex',
    marginBottom: '3rem',
  },
  boxButtons: {
    background: '#673ab7',
    width: '33%',
    color: 'white',
    padding: '10px',
    margin: '10px',
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form className={classes.root}>
        <TextField
          className={classes.textField}
          id='standard-full-width'
          label='Input a task'
          style={{ margin: 8 }}
          fullWidth
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.inputButton}
        >
          Add
        </Button>
        <Box className={classes.boxStyle}>
          <Button className={classes.boxButtons}>All</Button>
          <Button className={classes.boxButtons}>Active</Button>
          <Button className={classes.boxButtons}>Completed</Button>
        </Box>
      </form>
    </div>
  );
}
