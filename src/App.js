import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import 'fontsource-roboto';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className='App'>
      <Container maxWidth='md'>
        <Typography align='center' variant='h1'>
          Hello World!
        </Typography>
        <FormControl fullWidth='true'>
          <Typography variant='h2' align='center'>
            <label htmlFor='new-todo-input' className='label__lg'>
              What needs to be done?
            </label>
          </Typography>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <TextField
              fullWidth
              align='center'
              type='text'
              id='new-todo-input'
              className='input input__lg'
              autoComplete='off'
              size='lg'
            />
            <Button type='submit' className={classes.buttonStyle}>
              Add
            </Button>
          </Box>
        </FormControl>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <Button type='button' aria-pressed='true' className='btn toggle-btn'>
            <span className='visually-hidden'>Show</span>
            <span className='visually-hidden'>Tasks</span>
          </Button>
          <Button type='button' aria-pressed='false' className='btn toggle-btn'>
            <span className='visually-hidden'>Show</span>
            <span className='visually-hidden'>Tasks</span>
          </Button>
          <Button type='button' aria-pressed='false' className='btn toggle-btn'>
            <span className='visually-hidden'>Show</span>
            <span className='visually-hidden'>Tasks</span>
          </Button>
        </Box>
        <Typography variant='h2' id='list-heading' align='center'>
          3 tasks remaining
        </Typography>
        <List component='nav' aria-label='main mailbox folders'>
          <ListItem button>
            <ListItemText primary='X' />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary='X' />
          </ListItem>
        </List>
        <Divider />
        <List component='nav' aria-label='secondary mailbox folders'>
          <ListItem button>
            <ListItemText primary='X' />
          </ListItem>
        </List>
      </Container>
    </div>
  );
}
