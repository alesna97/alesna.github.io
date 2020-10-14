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
    MuiDivider: {
      root: {
        backgroundColor: '#7289DA',
      },
    },
  },
});

export default themes;
