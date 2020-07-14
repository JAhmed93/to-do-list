import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/styles';
import Checkbox from './Checkbox';

const useStyles = makeStyles({
  list: {
    width: '70%',
  },
  divMargin: {
    marginBottom: '1.5rem',
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonColor: {
    background: '#673ab7',
    color: 'white',
    width: '20%',
  },
  form: {
    display: 'inline-block',
  },
});

const Todo = (props) => {
  const classes = useStyles();
  return (
    <Box display='flex' justifyContent='center'>
      <List className={classes.list}>
        <ListItem>
          <ListItemText>
            <form className={classes.form}>
              <Checkbox id={props.id}></Checkbox>
            </form>

            {props.name}
            <Divider className={classes.divMargin} />
            <Box className={classes.buttonBox}>
              <Button variant='contained' className={classes.buttonColor}>
                Edit
              </Button>
              <Button variant='contained' className={classes.buttonColor}>
                Delete
              </Button>
            </Box>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default Todo;
