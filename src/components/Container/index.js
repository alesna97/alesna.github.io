/* eslint-disable no-return-assign */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, Button, Grid, Grow, IconButton, Paper, Typography,
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
        <Grid container>
          <Grid item md={4} xs={12}>
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
                <div className={classes.socialMedia}>
                  <IconButton>
                    <GitHubIcon color="secondary" />
                  </IconButton>

                  <IconButton>
                    <EmailIcon color="secondary" />
                  </IconButton>

                  <IconButton>
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
          </Grid>
          <Grid item md={8} xs={12}>
            <div className={classes.content}>
              { children }
            </div>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
