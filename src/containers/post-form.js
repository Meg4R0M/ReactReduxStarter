import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'
import {createPost} from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const formConfig = {
  form: "createPostForm",
  initialValues : {
    author : "Meg4R0M"
  },
};

class PostForm extends Component {

  render() {

    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
        <div>
          <h1>Nouveau post</h1>
          <form onSubmit={handleSubmit(this.createPost.bind(this))}>
            <div className={`form-group`}>
              <Field
                  component={renderField}
                  type="text"
                  name="title"
                  label="Titre"
                  validate={required}
              />
            </div>
            <div className={`form-group`}>
              <Field
                  component={renderField}
                  type="textarea"
                  className="form-control"
                  name="content"
                  label="Description"
                  validate={required}
              />
            </div>
            <div className={`form-group`}>
              <Field
                  component={renderField}
                  type="text"
                  className="form-control md"
                  name="author"
                  label="Auteur"
                  validate={required}
              />
            </div>
            <Link to='/' className="button_space">
              <button className="btn btn-danger">Retour</button>
            </Link>
            <button
                type="button"
                className="btn btn-secondary button_space"
                disabled={pristine || submitting}
                onClick={reset}>
              Reset
            </button>
            <button type="submit" className="btn btn-primary" disabled={submitting}>Créer</button>
          </form>
        </div>
    );

  }

  createPost(post){
    this.props.createPost(post);
    this.props.history.push('/');
  }

}

const required = value => (value || typeof value === 'number' ? undefined : 'Veuillez completer ce champ !');

const renderField = ({input, label, type, meta: { touched, error, warning }}) => (
    <div>
      <label>{label}</label>
      <div className={`form-group ${touched && error ? 'has-danger' : '' }`}>
        <input {...input} placeholder={label} type={type} className="form-control"/>
        {touched &&
        ((error && <div className="text-help">{error}</div>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({createPost}, dispatch),
});

export default connect(null,mapDispatchToProps)(reduxForm(formConfig)(PostForm));