import React, { createElement } from 'react';
import {
  IconButton, List, ListItem, makeStyles, Paper, Slide, Tooltip,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import menu from './menu';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 2,
    borderRadius: 50,
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(1),

    [theme.breakpoints.down('sm')]: {
      bottom: 0,
      width: '100%',
    },
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
}));

const Menu = () => {
  const classes = useStyles();
  return (
    <Slide in direction="up">
      <Paper className={classes.root}>
        <List className={classes.list}>
          {
            menu.map((item, idx) => (
              <ListItem key={idx}>
                <Tooltip title={item.title} placement="left">
                  <IconButton component={Link} to={item.link}>
                    { createElement(item.icon, { })}
                  </IconButton>
                </Tooltip>
              </ListItem>
            ))
          }
        </List>
      </Paper>
    </Slide>
  );
};

Menu.propTypes = {

};

export default Menu;
