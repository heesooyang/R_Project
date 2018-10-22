import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, reduxForm, change, FormSection } from 'redux-form'
import { createTemplate } from '../../actions/manage-templete'
import { createReplacement } from '../../actions/manage-replacement'
import SgReplacementsTable from './sg-replacementstable'
import SgReplacementsForm from './sg-replacementsform'
import SgReplacements from './sg-replacements'
import _ from 'lodash'


class SgNewTemp extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   this.props.dispatch(change('TemplatesNewForm', "ac",this.props.replacements.replacements))
  //
  // }

  renderFieldHidden = field => {
    const { meta: { touched, error } } = field
    const { replacements } = this.props
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          value={this.props.replacements}
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  renderField(field) {
    const { meta: { touched, error } } = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  renderTextAreaField(field) {
    const { meta: { touched, error } } = field
    const className = `form-group ${touched && error ? 'has-danger' : ''} pages__textarea`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <textarea
          className="form-control"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  renderReplacementsField = field => {
    const { replacements } = this.props

    const { meta: { touched, error } } = field
    const className = `form-group ${touched && error ? 'has-danger' : ''} newtemp__replacements`


    // renderModal(){
    //  react change css attribute....
    // }
    return (
      <div className={className}>
        <label>{field.label}</label>
        <button
          className="btn btn-danger newtemp__replacements__addbtn"
          // onClick={this.renderModal}
        >등록
        </button>
        <div className="text-help">
          {touched ? error : ''}
        </div>
        <SgReplacementsTable
          {...field.input}
          {...replacements}
        />
      </div>
    )
  }

  onSubmit(values) {
    // this.props.history.push('/');// 포스트가 완료되고 이동할지 안할지 모른다. fetch하는 시간이 걸리기때문에 창이동후 새목록이 불러지지않는다.

    const data = {
      ...values,
      replacements: [...this.props.replacements]
    }
    this.props.createTemplate(data, () => {
      this.props.history.push('/')
    })
  }

  render() {

    const { handleSubmit, pristine, reset, submitting, replacements } = this.props

    return (
      <section className="pages__newtemp">
        <h1 className="h1">템플릿 생성</h1>

        <SgReplacementsForm/>

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="템플릿 키"
            name="key"
            component={this.renderField}
          />
          <Field
            label="관리용 제목"
            name="title"
            component={this.renderField}
          />
          <Field
            label="메모"
            name="memo"
            component={this.renderField}
          />
          <div>
            <Field
              label="내용"
              name="body"
              component={this.renderTextAreaField}
            />
            <SgReplacementsTable/>
          </div>
          <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button>
          <Link to="/" disabled={pristine || submitting} className="btn btn-danger">Cancel</Link>

        </form>
      </section>
    )
  }
}

function mapStateToProps({ replacements }) {
  return { replacements }
}

export default reduxForm({
  // validate, // validate: validate,
  form: 'TemplatesNewForm'
})(
  connect(mapStateToProps, { createTemplate, createReplacement })(SgNewTemp)
)