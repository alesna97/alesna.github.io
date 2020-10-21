import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import {
  IconButton, makeStyles, Paper, Slide, Tooltip,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import menu from './menu';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    zIndex: 2,
    borderRadius: 50,
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(1),
    padding: 8,
    [theme.breakpoints.down('sm')]: {
      bottom: 0,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      padding: 1,
      position: 'fixed',
    },
  },
  menuIcon: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      margin: 4,
    },
  },
}));

const Menu = ({ width }) => {
  const classes = useStyles();
  return (
    <Slide in direction="up">
      <Paper className={classes.root}>
        {
            menu.map((item) => (
              <div key={item.title} className={classes.menuIcon}>
                <Tooltip title={item.title} placement={isWidthUp('sm', width) ? 'right' : 'top'}>
                  <IconButton component={Link} to={item.link}>
                    { createElement(item.icon, { })}
                  </IconButton>
                </Tooltip>
              </div>
            ))
          }
      </Paper>
    </Slide>
  );
};

Menu.propTypes = {
  // eslint-disable-next-line react/require-default-props
  width: PropTypes.string,
};

export default withWidth()(Menu);
