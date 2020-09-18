import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Grow, Paper, Slide, Typography,
} from '@material-ui/core';
import Content from '../../../components/Content';
import useStyles from './home-jss';

const Home = (props) => {
  const { test } = props;
  const classes = useStyles();
  return (
    <>
      <Content>
        <Grow in>
          <div className={classes.root}>

            <Slide in direction="left">
              <Typography
                variant="h3"
                color="primary"
              >
                Anjas Lesmana
              </Typography>
            </Slide>

            <Slide in direction="right">
              <Typography
                variant="h6"
                color="secondary"
              >
                Web Developer
              </Typography>
            </Slide>
          </div>
        </Grow>
      </Content>
    </>
  );
};

Home.propTypes = {};

export default Home;
