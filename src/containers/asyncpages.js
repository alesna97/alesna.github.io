/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import Loadable from 'react-loadable';
import { PuffLoader } from 'react-spinners';

const Loading = () => <PuffLoader color="#FFFFFF" />;

export const Home = Loadable({
  loader: () => import('./Pages/Home'),
  loading: Loading,
});

export const AboutMe = Loadable({
  loader: () => import('./Pages/AboutMe'),
  loading: Loading,
});

export const Education = Loadable({
  loader: () => import('./Pages/Education'),
  loading: Loading,
});

export const ProfessionalExperience = Loadable({
  loader: () => import('./Pages/ProfessionalExperience'),
  loading: Loading,
});

export const Portofolio = Loadable({
  loader: () => import('./Pages/Portofolio'),
  loading: Loading,
});

export const TechnicalSkill = Loadable({
  loader: () => import('./Pages/TechnicalSkill'),
  loading: Loading,
});
