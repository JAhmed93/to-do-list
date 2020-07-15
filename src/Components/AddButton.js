import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  inputButton: {
    width: '70%',
    margin: '3rem',
    background: '#673ab7',
    color: 'white',
  },
}));

const AddButton = (props) => {
  const classes = useStyles();
  return (
    <Button aria-pressed='true' className={classes.inputButton}>
      {props.name}{' '}
    </Button>
  );
};

export default AddButton;
