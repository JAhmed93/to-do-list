import React from 'react';
import Todo from './Components/Todo';
import Typography from '@material-ui/core/Typography';
import InputTasks from './Components/InputTasks';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    marginTop: '3rem',
    padding: '2rem',
  },
  h1: {
    margin: '2rem',
  },
  h4: {
    margin: '1.5rem',
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <Container maxWidth='md' className={classes.root}>
      <div className='App'>
        <Typography variant='h1' align='center' className={classes.h1}>
          TodoMatic
        </Typography>
        <Typography variant='h4' align='center' className={classes.h4}>
          What needs to be done?
        </Typography>
        <InputTasks></InputTasks>
        <Typography variant='h3' align='center' className={classes.h3}>
          3 tasks remaining
        </Typography>
        <Todo task='Eat'></Todo>
        <Todo task='Sleep'></Todo>
        <Todo task='Repeat'></Todo>
      </div>
    </Container>
  );
}
