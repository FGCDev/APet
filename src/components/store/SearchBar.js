import React, { Component } from 'react'
import TextInput from './TextInputFormik'
import { Formik, Form, Field } from 'formik'
//import Yup from 'yup'
import isEmpty from 'lodash/isEmpty'
 
export default class AddGameForm extends Component {
  render() {
    return (
      <div className="addGameForm">
        <Formik
          /* validationSchema={Yup.object().shape({
            title: Yup.string()
              .min(3, 'Title must be at least 3 characters long.')
              .required('Title is required.'),
          })} */
          initialValues={{
            title: 'asdf',
            releaseYear: '',
            genre: '',
            price: '12',
          }}
          onSubmit={(values, actions) => {
            // this could also easily use props or other
            // local state to alter the behavior if needed
            // this.props.sendValuesToServer(values)
 
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
          render={({ values, touched, errors, dirty, isSubmitting }) => (
            <Form>
              <Field
                type="text"
                name="title"
                label="Title"
                component={<input/>}
              />
              <Field
                type="text"
                name="releaseYear"
                label="Release Year"
                component={<input/>}
              />
              <Field
                type="text"
                name="genre"
                label="Genre"
                component={<input/>}
              />
              <Field
                type="text"
                name="price"
                label="Price"
                component={<input/>}
              />
              <button
                type="submit"
                className="btn btn-default"
                disabled={isSubmitting || !isEmpty(errors) || !dirty}
              >
                Add Game
              </button>
            </Form>
          )}
        />
      </div>
    )
  }
}