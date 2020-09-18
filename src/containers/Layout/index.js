import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Fade, IconButton, List, ListItem, makeStyles, Paper, Slide, Tooltip,
} from '@material-ui/core';
import Particles from 'react-particles-js';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import WorkIcon from '@material-ui/icons/Work';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'fixed',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  navigation: {
    position: 'absolute',
    zIndex: 1,
    width: 56,
    display: 'flex',
    right: 150,
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
  },
}));

const Layout = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        { children }
      </Container>
      <Slide in direction="up">
        <Paper className={classes.navigation}>

          <Tooltip title="Home" placement="left">
            <IconButton component={Link} to="/">
              <HomeIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="About me" placement="left">
            <IconButton component={Link} to="/about-me">
              <PersonIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Education" placement="left">
            <IconButton component={Link} to="/education">
              <SchoolIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Technical Sill" placement="left">
            <IconButton component={Link} to="/technical-skill">
              <CodeIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Professional Experience" placement="left">
            <IconButton component={Link} to="/professional-experience">
              <WorkIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Portofolio" placement="left">
            <IconButton component={Link} to="/portofolio">
              <AppsIcon />
            </IconButton>
          </Tooltip>

        </Paper>
      </Slide>
    </div>
  );
};
Layout.propTypes = {

};

export default Layout;
