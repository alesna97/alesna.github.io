import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      height: 500,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5),
    },
  },
}));

export default useStyles;
