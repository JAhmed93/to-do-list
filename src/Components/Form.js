import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddButton from './AddButton';

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

export default function Form(props) {
  const classes = useStyles();

  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert('Hello, world!');
    props.addTask(name);
    setName('');
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
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
          value={name}
          onChange={handleChange}
        />
        <AddButton
          variant='contained'
          color='primary'
          className={classes.inputButton}
          name='Add'
          clicked={handleSubmit}
        ></AddButton>
      </form>
    </div>
  );
}
