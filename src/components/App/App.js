import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Advice from "../Advice/Advice"
import Notifications from "../Notifications/Notifications"
import BetaBanner from '../elements/BetaBanner/BetaBanner';
import Header from '../elements/Header/Header';
import NotFoundPage from '../elements/NotFoundPage/NotFoundPage';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <BetaBanner />
        <Header />
        <Switch>
          <Route path="/" component={Advice} exact />
          <Route path="/notifications" component={Notifications} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App;
