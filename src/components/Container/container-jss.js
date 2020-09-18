import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 20,
    backgroundColor: '#444444',
    display: 'flex',
    width: 1200,
    height: 600,
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: theme.spacing(2),
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
  },
}));

export default useStyles;
