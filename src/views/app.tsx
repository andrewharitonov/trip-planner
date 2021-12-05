import React from 'react';
import {CURRENT_YEAR} from 'constants/globals';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import Content from 'components/content/content';
import TripPlanner from './tripPlanner/tripPlanner';

const App = () => {
  return (
    <>
      <Header>Plan your trip!</Header>
      <Content>
        <TripPlanner />
      </Content>
      <Footer>© 2014-{CURRENT_YEAR} Tiqets Amsterdam</Footer>
    </>
  );
};

export default App;
