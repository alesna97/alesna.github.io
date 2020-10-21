import React from 'react';
import {
  Button,
  Divider, Slide, Typography,
} from '@material-ui/core';
import aboutMe from './aboutMe';
import Content from '../../../components/Content';
import useStyles from './aboutMe-jss';

const AboutMe = () => {
  const classes = useStyles();
  return (
    <>
      <Content>
        <div className={classes.root}>
          <Slide in direction="left">
            <Typography color="primary" style={{ fontSize: 24 }} gutterBottom>
              About Me
              <Divider
                variant="inset"
                component="hr"
                color="primary"
              />
            </Typography>
          </Slide>
          <Slide in direction="right">
            <Typography
              color="secondary"
              align="jutify"
            >
              {aboutMe}
            </Typography>
          </Slide>
        </div>
      </Content>
    </>
  );
};

export default AboutMe;
