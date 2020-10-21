import React from 'react';
import {
  Grow, Slide, Typography,
} from '@material-ui/core';
import Content from '../../../components/Content';
import useStyles from './home-jss';

const Home = () => {
  const classes = useStyles();
  return (
    <Content>
      <Grow in>
        <div className={classes.root}>

          <Slide in direction="left">
            <Typography
              color="primary"
              style={{ fontSize: 24 }}
            >
              Hi, there!
            </Typography>
          </Slide>

          <Slide in direction="right">
            <Typography
              color="secondary"
            />
          </Slide>
        </div>
      </Grow>
    </Content>
  );
};

Home.propTypes = {};

export default Home;
