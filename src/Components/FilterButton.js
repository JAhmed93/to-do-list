import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  boxButtons: {
    background: '#673ab7',
    width: '20%',
    color: 'white',
    padding: '10px',
    margin: '10px',
  },
  inputButton: {
    width: '70%',
    margin: '3rem',
    background: '#673ab7',
    color: 'white',
  },
}));

const FilterButton = (props) => {
  const classes = useStyles();
  return (
    <Button aria-pressed='true' className={classes.boxButtons}>
      {props.name}{' '}
    </Button>
  );
};

export default FilterButton;
