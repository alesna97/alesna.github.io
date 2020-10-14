/* eslint-disable jsx-quotes */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  AboutMe,
  Education,
  Home,
  Portofolio,
  ProfessionalExperience,
  TechnicalSkill,
} from './containers/asyncpages';
import Layout from './containers/Layout';

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/about-me' component={AboutMe} />
          <Route path='/education' component={Education} />
          <Route path='/technical-skill' component={TechnicalSkill} />
          <Route path='/professional-experience' component={ProfessionalExperience} />
          <Route path='/portofolio' component={Portofolio} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
