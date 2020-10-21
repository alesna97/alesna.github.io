/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  darken,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
} from '@material-ui/core';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import ProfilePicture from '../../components/ProfilePicture';
import Menu from '../../components/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    zIndex: 1,
    position: 'fixed',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  appBar: {
    height: 42,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#353F64',
  },
}));

const Layout = (props) => {
  const { children, width } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        isWidthDown('sm', width)
        && (
          <Slide in>
            <AppBar className={classes.appBar} color="primary">
              <Typography variant="button" className={classes.title}>
                Anjas Lesmana
              </Typography>
            </AppBar>
          </Slide>
        )
      }
      <ProfilePicture>
        {children}
      </ProfilePicture>
      <Menu />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
};

export default withWidth()(Layout);
