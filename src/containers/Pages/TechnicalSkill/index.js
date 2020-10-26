import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Content from '../../../components/Content';
import rails from '../../../assets/icons/rails.png';
import react from '../../../assets/icons/react.png';
import mongodb from '../../../assets/icons/mongodb.png';
import psql from '../../../assets/icons/postgresql.png';
import git from '../../../assets/icons/git.png';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    marginTop: 56,
  },
  skillWrapper: {
    width: 100,
    height: 100,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    margin: theme.spacing(1),
  },
  img: {
    width: '100%',
    height: '100%',
  },
}));

const TechnicalSkill = () => {
  const classes = useStyles();
  return (
    <Content>
      <Grid container className={classes.root}>
        <Grid item className={classes.skillWrapper}>
          <img alt="skill-1" src={react} className={classes.img} />
        </Grid>

        <Grid item className={classes.skillWrapper}>
          <img alt="skill-2" src={rails} className={classes.img} />
        </Grid>

        <Grid item className={classes.skillWrapper}>
          <img alt="skill-3" src={mongodb} className={classes.img} />
        </Grid>

        <Grid item className={classes.skillWrapper}>
          <img alt="skill-4" src={psql} className={classes.img} />
        </Grid>

        <Grid item className={classes.skillWrapper}>
          <img alt="skill-5" src={git} className={classes.img} style={{ height: 46 }} />
        </Grid>

      </Grid>
    </Content>
  );
};
export default TechnicalSkill;
