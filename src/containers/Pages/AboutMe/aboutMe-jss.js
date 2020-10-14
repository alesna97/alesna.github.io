import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(10),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

export default useStyles;
