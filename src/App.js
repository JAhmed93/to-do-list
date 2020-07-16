import React, { useState } from 'react';
import Todo from './Components/Todo';
import Typography from '@material-ui/core/Typography';
import Form from './Components/Form';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import FilterButton from './Components/FilterButton';
import { nanoid } from 'nanoid';

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
  boxStyle: {
    width: '100%',
    display: 'flex',
    marginBottom: '3rem',
    justifyContent: 'center',
  },
});

export default function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: 'todo-' + nanoid(), name: name, checked: false };
    setTasks([...tasks, newTask]);
  }

  const classes = useStyles();

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  };

  const editTask = (id, newName) => {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  };

  //rendering components iteratively
  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      key={task.id}
      checked={task.checked}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <Container maxWidth='md' className={classes.root}>
      <div className='App'>
        <Typography variant='h1' align='center' className={classes.h1}>
          TodoMatic
        </Typography>
        <Typography variant='h4' align='center' className={classes.h4}>
          What needs to be done?
        </Typography>
        <Form addTask={addTask} />
        <Box className={classes.boxStyle}>
          <FilterButton name='All'></FilterButton>
          <FilterButton name='Active'></FilterButton>
          <FilterButton name='Completed'></FilterButton>
        </Box>
        <Typography variant='h3' align='center' className={classes.h3}>
          {headingText}
        </Typography>
        {taskList}
      </div>
    </Container>
  );
}
