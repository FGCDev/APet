import React, { Component, lazy, Suspense } from 'react';
import throttle from 'lodash/throttle';
import firebase from '../services/fb';

// import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import {
  // NavLink,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

// import Store from './Store';
import EB from './helpers/ErrorBoundary';
import Loader from './helpers/Loader';
import handleInitialStoreData from './../actions/index.js';

const Landing = lazy(() => import('./newer'));
const Store = lazy(() => import('./store/Store'));
const ItemDetails = lazy(() => import('./store/ItemDetails'));


// const Landing = ({ match }) => {
//   //const location = props.match.path;
//   const prop = JSON.stringify(match);

//   let linker = (
//     false ? (
//       <div>
//         <ul style={{ listStyleType: 'none', padding: 0 }}>
//           <li><NavLink to={`${match.url}/testCard`}>Card</NavLink></li>
//         </ul>
//       </div>
//     ) :
//       <ul style={{ listStyleType: 'none', padding: 0 }}>
//         <li><NavLink to={`/store`}>Store</NavLink></li>
//       </ul>
//   );




//   // const loc = JSON.stringify(props.match);
//   console.log('C1: ', match);
//   return (
//     <>
//       <h2>My Match props rock: </h2>
//       {prop}
//       {linker}
//     </>
//   );
// };
//export default Landing;

const routesNew = [
  {
    path: '/',
    exact: true,
    //sidebar: () => <div> Default Route </div>,
    component: () => <Suspense fallback={(<Loader />)}><Landing /></Suspense>
  },
  {
    path: '/login',
    exact: true,
    component: () => <Suspense fallback={(<Loader />)}><Landing /></Suspense>/*(props) => <Landing props={props}/>*/
  },
  {
    path: '/signup',
    exact: true,
    component: () => <Suspense fallback={(<Loader />)}><Landing /></Suspense>/*(props) => <Landing props={props}/>*/
  },
  {
    path: '/store',
    exact: true,
    component: () => <Suspense fallback={(<Loader />)}><Store /></Suspense>
  },
  {
    path: '/store/item',
    exact: false,
    component: () => <Suspense fallback={(<Loader />)}><ItemDetails /></Suspense>
  }
];
const routesAuth = [
  {
    path: '/',
    exact: true,
    //sidebar: () => <div> Default Route </div>,
    component: () => <Suspense fallback={(<Loader />)}><Store /></Suspense>
  },
  {
    path: '/landed',
    exact: true,
    component: () => <Suspense fallback={(<Loader />)}><Landing /></Suspense>/*(props) => <Landing props={props}/>*/
  },
  {
    path: '/store',
    exact: true,
    component: () => <Suspense fallback={(<Loader />)}><Store /></Suspense>
  },
  {
    path: '/store/item',
    exact: false,
    component: () => <Suspense fallback={(<Loader />)}><ItemDetails /></Suspense>
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
let routes = [];

if (!firebase.auth().currentUser) {
  // User is signed in.
  routes = routesNew
} 
else{
  routes = routesAuth
}

class App extends Component {
  state = {
    isMobile: false
  }

  handleWindowResize = () => {
    return throttle(() => {
      this.setState({ isMobile: window.innerWidth < 480 })
    }, 200);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
    // firebase.auth().onAuthStateChanged(user => {
    //   if(user){
    //     this.props.history.push("/");
    //   }
    // })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  render() {
    return (
      <div className="App">
        <EB>
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
        </EB>
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