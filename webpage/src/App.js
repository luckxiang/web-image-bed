import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';
import withHocPrivateRoute from './containers/withHocPrivateRoute'
import Login from './screens/Login'
import PageLayout from './layouts/PageLayout'
const  PrivateRoute =  withHocPrivateRoute(Route);
class App extends Component {
  
  componentWillMount(){
    document.body.removeChild(document.getElementById('app-loading'));
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/page" component={PageLayout}/>
          <Redirect path="" to={{pathname: '/page'}} />
        </Switch>
      </Router>
    );
  }
}

export default App;
