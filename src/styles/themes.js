import { createMuiTheme } from '@material-ui/core';

const themes = createMuiTheme({
  palette: {
    primary: {
      main: '#7289DA',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Open Sans',
    ].join(','),
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 20,
      },
    },
  },
});

export default themes;
