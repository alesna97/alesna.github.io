import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 20,
    backgroundColor: '#444444',
    opacity: 0.8,
    display: 'flex',
    alignItems: 'center',
    width: 900,
    height: 500,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      borderRadius: 0,
      height: 900,
      overflow: 'auto',
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
    width: '100px',
    height: '100px',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: '120px',
      height: '120px',
      marginTop: 60,
    },
  },
  name: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  jobTitle: {
    color: theme.palette.primary.main,
  },
  socialMediaWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIconButton: {
    flex: 1,
  },
  buttonCv: {
    marginTop: 8,
    marginBottom: 8,
  },
}));

export default useStyles;
