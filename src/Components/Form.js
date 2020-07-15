import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FilterButton from './FilterButton';
import AddButton from './AddButton';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '90%',
  },
  form: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form className={classes.form}>
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
        <AddButton
          variant='contained'
          color='primary'
          className={classes.inputButton}
          name='Add'
        ></AddButton>
      </form>
    </div>
  );
}
