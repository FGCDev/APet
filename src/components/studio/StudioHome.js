import React, { Component, lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  // NavLink,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

// import Store from './Store';
import EB from './helpers/ErrorBoundary';
import Loader from './helpers/Loader';

const Store = lazy(() => import('./store/Store'));
const ItemDetails = lazy(() => import('./store/ItemDetails'));

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
  },
  {
    path: '/store/checkout',
    exact: true,
    component: () => <Suspense fallback={(<Loader />)}><ItemDetails /></Suspense>
  }
];

export class StudioHome extends Component {
  static propTypes = {
    prop: PropTypes.string,
  }

  render() {
    return (
      <div>
        <details>
          <summary></summary>
          <main></main>
        </details>

        <section>
        <EB><Switch>
          {routesAuth.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component} //render={(props) => <Comp {...props} /*Pass Any Additional Props*/ />}
            />
          ))}
        </Switch></EB>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(StudioHome)
