/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, Button, Grow, IconButton, Paper, Typography,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import useStyles from './container-jss';
import me1 from '../../assets/images/me1.png';
import me2 from '../../assets/images/me2.png';
import cv from '../../assets/cv/anjas-lesmana.pdf';

const Container = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.root}>
        <Grow in>
          <div className={classes.profile}>
            <Avatar
              className={classes.avatar}
              src={me1}
              sizes="large"
            />
            <Typography
              variant="h5"
              className={classes.name}
            >
              Anjas Lesmana
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
            >
              Web Developer
            </Typography>
            <div className={classes.socialMediaWrapper}>
              <IconButton className={classes.socialIconButton}>
                <GitHubIcon color="secondary" />
              </IconButton>

              <IconButton className={classes.socialIconButton}>
                <EmailIcon color="secondary" />
              </IconButton>

              <IconButton className={classes.socialIconButton}>
                <LinkedInIcon color="secondary" />
              </IconButton>
            </div>

            <Button
              variant="contained"
              color="primary"
              className={classes.buttonCv}
              onClick={() => window.location.href = cv}
            >
              Download CV
            </Button>
          </div>
        </Grow>
        <div className={classes.content}>
          { children }
        </div>
      </Paper>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
