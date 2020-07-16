import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/styles';
import Checkbox from './Checkbox';
import TextField from '@material-ui/core/TextField';

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
  textField: {
    width: '100%',
  },
  editForm: {
    width: '100%',
  },
});

const Todo = (props) => {
  const classes = useStyles();

  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName('');
    setEditing(false);
  };

  const editingTemplate = (
    <Box display='flex' justifyContent='center'>
      <List className={classes.list}>
        <ListItem>
          <ListItemText>
            <form className={classes.editForm} onSubmit={handleSubmit}>
              <TextField
                fullWidth
                className={classes.textField}
                label='Edit the previous task'
                InputLabelProps={{
                  shrink: true,
                }}
                value={newName}
                onChange={handleChange}
              ></TextField>
              <Divider className={classes.divMargin} />
              <Box className={classes.buttonBox}>
                <Button
                  variant='contained'
                  className={classes.buttonColor}
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant='contained'
                  className={classes.buttonColor}
                  type='submit'
                >
                  Save
                </Button>
              </Box>
            </form>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  const viewTemplate = (
    <Box display='flex' justifyContent='center'>
      <List className={classes.list}>
        <ListItem>
          <ListItemText>
            <form className={classes.form}>
              <Checkbox
                id={props.id}
                onChange={() => props.toggleTaskCompleted(props.id)}
                checked={!props.checked}
              ></Checkbox>
            </form>

            {props.name}
            <Divider className={classes.divMargin} />
            <Box className={classes.buttonBox}>
              <Button
                variant='contained'
                className={classes.buttonColor}
                onClick={() => setEditing(true)}
              >
                Edit
              </Button>
              <Button
                variant='contained'
                className={classes.buttonColor}
                onClick={() => props.deleteTask(props.id)}
              >
                Delete
              </Button>
            </Box>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
  return <div>{isEditing ? editingTemplate : viewTemplate}</div>;
};

export default Todo;
