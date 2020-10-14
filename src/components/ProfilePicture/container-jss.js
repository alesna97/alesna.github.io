import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 20,
    backgroundColor: '#444444',
    opacity: 0.8,
    display: 'flex',
    marginTop: '16px',
    alignItems: 'center',
    width: '70%',
    height: '80%',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    },
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    width: '50%',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  avatar: {
    width: '200px',
    height: '200px',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: '120px',
      height: '120px',
    },
  },
  name: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  jobTitle: {
    color: theme.palette.primary.main,
  },
  socialMedia: {
    display: 'flex',
  },
  buttonCv: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(1),
    },
  },
}));

export default useStyles;
