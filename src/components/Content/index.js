import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderRadius: 20,
    backgroundColor: '#222222',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 18,
      marginRight: 18,
      marginBottom: 80,
    },
  },
}));

const Content = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      { children }
    </Paper>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
