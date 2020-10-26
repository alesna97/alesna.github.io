import React from 'react';
import {
  Divider, makeStyles, Slide, Typography,
} from '@material-ui/core';
import Content from '../../../components/Content';

const useStyles = makeStyles(({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Education = () => {
  const classes = useStyles();

  return (
    <Content>
      <div className={classes.root}>
        <Slide in direction="left">
          <Typography color="primary" style={{ fontSize: 24 }} gutterBottom>
            Latest Education
            <Divider
              variant="inset"
              component="hr"
              color="primary"
            />
          </Typography>
        </Slide>

        <Slide in direction="right">
          <div className={classes.textWrapper}>
            <Typography color="secondary" variant="button">
              Bachelor degree - Informatics Engineering
            </Typography>
            <Typography color="secondary" variant="caption">
              2015 - 2019
            </Typography>
          </div>
        </Slide>
      </div>
    </Content>
  );
};

export default Education;
