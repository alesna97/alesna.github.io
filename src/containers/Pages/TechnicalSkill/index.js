import React from 'react';
import {
  Divider, Grid, makeStyles, Typography,
} from '@material-ui/core';
import Content from '../../../components/Content';
import rails from '../../../assets/icons/rails.png';
import react from '../../../assets/icons/react.png';
import mongodb from '../../../assets/icons/mongodb.png';
import psql from '../../../assets/icons/postgresql.png';
import git from '../../../assets/icons/git.png';
import materialUi from '../../../assets/icons/material-ui.svg';
import css from '../../../assets/icons/css3.svg';
import redux from '../../../assets/icons/redux.png';
import js from '../../../assets/icons/js.png';
import windows from '../../../assets/icons/windows.png';
import linux from '../../../assets/icons/linux.png';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
  },
  skillWrapper: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    margin: theme.spacing(1),
  },
  img: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },
}));

const TechnicalSkill = () => {
  const classes = useStyles();
  return (
    <Content>
      <div className={classes.wrapper}>
        <Typography className={classes.title} color="primary">
          Skills
          <Divider variant="inset" color="primary" component="hr" />
        </Typography>
        <Grid container className={classes.root}>
          <Grid item className={classes.skillWrapper}>
            <img alt="skill-0" src={js} className={classes.img} />
          </Grid>

          <Grid item className={classes.skillWrapper}>
            <img alt="skill-1" src={react} className={classes.img} />
          </Grid>

          <Grid item className={classes.skillWrapper}>
            <img alt="skill-8" src={redux} className={classes.img} style={{ width: 140 }} />
          </Grid>

          <Grid item className={classes.skillWrapper}>
            <img alt="skill-6" src={materialUi} className={classes.img} style={{ height: 46 }} />
          </Grid>

          <Grid item className={classes.skillWrapper}>
            <img alt="skill-7" src={css} className={classes.img} />
          </Grid>

          <Grid item className={classes.skillWrapper}>
            <img alt="skill-11" src={rails} className={classes.img} />
          </Grid>

          <Grid item className={classes.skillWrapper}>
            <img alt="skill-14" src={mongodb} className={classes.img} />
          </Grid>

          <Grid item className={classes.skillWrapper}>
            <img alt="skill-15" src={psql} className={classes.img} />
          </Grid>

          <Grid item className={classes.skillWrapper}>
            <img alt="skill-5" src={git} className={classes.img} style={{ height: 46 }} />
          </Grid>

          <Grid item className={classes.skillWrapper}>
            <img alt="skill-9" src={windows} className={classes.img} />
          </Grid>

          <Grid item className={classes.skillWrapper}>
            <img alt="skill-10" src={linux} className={classes.img} />
          </Grid>

        </Grid>
      </div>
    </Content>
  );
};

export default TechnicalSkill;
