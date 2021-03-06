import React from 'react'
import {Field, reduxForm} from 'redux-form'


class StreamForm extends React.Component {

  renderError = ({error, touched}) => {
    if(touched && error){
      return(
        <div className="ui">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`

    return(
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off'/>
        {this.renderError(meta)}
      </div>
    )
  }

  onFormSubmit = formValues => {
    this.props.onSubmit(formValues)
  }

  render(){
    return(
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className='ui form'>
        <Field name='title' label='Title' component={this.renderInput}/>
        <Field name='description' label='Description' component={this.renderInput}/>
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validateField = formValues => {
  const errors = {}

  if(!formValues.title){
    errors.title = 'Please enter a title'
  }

  if(!formValues.description){
    errors.description = 'Please enter a description'
  }

  return errors
}

export default reduxForm({
  form: 'streamForm',
  validate: validateField
})(StreamForm)