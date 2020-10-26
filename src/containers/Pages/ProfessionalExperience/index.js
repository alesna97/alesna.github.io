import React from 'react';
import {
  Divider, List, ListItem, ListItemText, makeStyles, Slide, Typography,
} from '@material-ui/core';
import Content from '../../../components/Content';

const useStyles = makeStyles(({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
    padding: 16,
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  listItemText: {
    color: 'white',
  },
}));

const ProfessionalExperience = () => {
  const classes = useStyles();
  const date = new Date();
  return (
    <Content>
      <div className={classes.root}>
        <Slide in direction="left">
          <Typography color="primary" style={{ fontSize: 24 }} gutterBottom>
            Professional Experience
            <Divider
              variant="inset"
              component="hr"
              color="primary"
            />
          </Typography>
        </Slide>

        <Slide in direction="right">
          <Typography color="secondary" align="center">
            Currently employed in a company in Bandung as fulltime web developer with
            {' '}
            { date.getFullYear() - 2018 }
            {' '}
            years experience
          </Typography>
        </Slide>
      </div>
    </Content>
  );
};

export default ProfessionalExperience;
