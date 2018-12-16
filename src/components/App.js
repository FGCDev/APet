import React, { Component, Lazy, Suspense } from 'react';
// import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';
import {
  NavLink,
  Switch,
  Route, 
  withRouter
} from 'react-router-dom';

import NavBar from './NavBar';
import Store from './Store';

const Landing = ({ match }) => {
  //const location = props.match.path;
  const prop = JSON.stringify(match);

  let linker = (
    false ? (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><NavLink to={`${match.url}/testCard`}>Card</NavLink></li>
      </ul>
    </div>
    ):
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li><NavLink to={`/store`}>Store</NavLink></li>
    </ul>
  );


  

  // const loc = JSON.stringify(props.match);
  console.log('C1: ', match);
  return (
    <>
      <h2>My Match props rock: </h2>
      {prop}
      {linker}
    </>
  );
};
//export default Landing;

const routes = [
  {
    path: '/',
    exact: true,
    //sidebar: () => <div> Default Route </div>,
    component: () => <h2> Default </h2>
  },
  {
    path: '/landed',
    exact: true,
    component: Landing/*(props) => <Landing props={props}/>*/
  },
  {
    path: '/store',
    exact: true,
    component: Store
  },
  {
    path: '/user',
    exact: true,
    component: () => <h2>Profile</h2>
  },
  {
    path: `/user/dashboard`,
    exact: true,
    component: () => <h2>Dashboard</h2>
  },
  {
    path: `/user/profile`,
    exact: true,
    component: () => <h2>Profile</h2>
  }
];


class App extends Component {

  componentDidMount(){
    //Load Init data.
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main className="App-vp">
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component} //render={(props) => <Comp {...props} /*Pass Any Additional Props*/ />}
              />
            ))}
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //STuff
  
  return {
    
  };
};
//export default connect()(App);
export default withRouter(connect(mapStateToProps)(App));
