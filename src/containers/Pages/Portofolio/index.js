import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, Typography } from '@material-ui/core';
import Content from '../../../components/Content';

const Portofolio = (props) => (
  <>
    <Content>
      <Box
        display="flex"
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography
          color="secondary"
          variant="h6"
        >
          Public Portofolio :
        </Typography>
      <Link href="https://ulas.id">Ulas.id</Link>
      <Link href="https://sembilan-tani.web.app/">Sembilan Tani</Link>
      </Box>
    </Content>
  </>
);

Portofolio.propTypes = {

};

export default Portofolio;
