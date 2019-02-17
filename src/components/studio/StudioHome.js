import React, { Component, lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import {
//   NavLink,
//   Switch,
//   Route,
//   withRouter
// } from 'react-router-dom';

// import Store from './Store';
import EB from '../helpers/ErrorBoundary';
import Loader from '../helpers/Loader';

import './studioHome.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Store = lazy(() => import('../store/Store'));
const ItemDetails = lazy(() => import('../store/ItemDetails'));
const StoreCard = lazy(() => import('../store/StoreCard'));

// const routesStudio = [
//   {
//     path: '/',
//     exact: true,
//     //sidebar: () => <div> Default Route </div>,
//     component: () => <Suspense fallback={(<Loader />)}><ItemDetails /></Suspense>
//   },
//   {
//     path: '/store',
//     exact: true,
//     component: () => <Suspense fallback={(<Loader />)}><Store /></Suspense>
//   },
//   {
//     path: '/store/item',
//     exact: true,
//     component: () => <Suspense fallback={(<Loader />)}><ItemDetails /></Suspense>
//   },
//   {
//     path: '/store/storecard',
//     exact: true,
//     component: () => <Suspense fallback={(<Loader />)}><StoreCard /></Suspense>
//   },
// ];

// const routeWay = (
//   <Switch>
//     {routesStudio.map((route) => (
//       <Route
//         key={route.path}
//         path={route.path}
//         exact={route.exact}
//         component={route.component}
//       //render={(props) => <route.component {...props} /*Pass Any Additional Props*/ />}
//       />
//     ))}
//   </Switch>
// )

const studiohome = (<h1>
  Hi I'm Studio.
  <hr />
  Please Select a view type to preview your data as you enter it.
</h1>);


export class StudioHome extends Component {
  static propTypes = {
    prop: PropTypes.string,
  }

  state = {
    view: 'item',
  };

  toggleDetailsIcon = () => {
    this.setState(prevState => ({ ...prevState, showReviews: !prevState.showReviews }))
  }

  updatePreview = (view) => {
    console.log('updating state');
    this.setState(prevState => ({ ...prevState, view: view }))
  }

  render() {
    return (
      <React.Fragment>
        <details className="creatorsPanel" open={true}>
          <summary >AP Studio <span>🗕/🗖</span></summary>
          <section>
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                let errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) { errors.email = 'Invalid email address'; }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}>
              {({ isSubmitting }) => (
                <Form className="creatorsForm">
                  <span>Email</span>
                  <Field className="formField" type="email" name="email" placeholder="Email"/>
                  <ErrorMessage name="email" component="div" />
                  <Field className="formField" type="password" name="password" placeholder="Password"/>
                  <ErrorMessage name="password" component="div" />
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                  <div>a<br /><br /><br /><br /></div>
                  <div className="formField" >muahahahahahahhh
                  <br />hhhhhhhhhhhhhhhhh
                  <br />hhhhhhhhhhhhhhhhh
                  <br />hhhhhaaaaaaaaaaaa
                  <br />aaaaaaaaaaaaaaaaaaa</div>
                </Form>
              )}
            </Formik>
          </section>
        </details>

        <section className="previewer">
          <div className='controlBar'>
            Creators' Sudio | Select a view to start preview.
            <button className='BackPrimaryInv btnOutline clickable studioLink' onClick={() => this.updatePreview('item')}>Item Details</button>
            <button className='BackPrimaryInv btnOutline clickable studioLink' onClick={() => this.updatePreview('store')}>Store</button>
            <button className='BackPrimaryInv btnOutline clickable studioLink' onClick={() => this.updatePreview('card')}>Item Card</button>
          </div>
          <EB>{this.renderPreview(this.state.view)}</EB>
        </section>
      </React.Fragment>
    )
  }

  renderPreview(view) {
    switch (view) {
      case 'item': {
        return <Suspense fallback={(<Loader />)}><ItemDetails /></Suspense>
      }
      case 'store': {
        return <Suspense fallback={(<Loader />)}><Store /></Suspense>
      }
      case 'card': {
        return <Suspense fallback={(<Loader />)}><StoreCard /></Suspense>
      }
      default: {
        return studiohome
      }
    }
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(StudioHome)
