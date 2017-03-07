import React from 'react';
import { browserHistory, Route, Router, IndexRoute } from 'react-router';
import Layout from './Layout'
import BarsContainer from '../containers/BarsContainer'
import BarContainer from '../containers/BarContainer'

const Routes = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={BarsContainer} />
        <Route path="/bars" component={BarsContainer} />
        <Route path="/bars/:id" component={BarContainer} />
      </Route>
    </Router>
  )
}

export default Routes
