import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createReplacement } from '../../actions/manage-replacement'


class SgReplacements extends Component{

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

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


  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return(
      <section className="newtemp__replacementsmodal1">
          <div>
            <Field
              label="관리용 제목"
              name="title"
              component={this.renderField}
            />
            <Field
            nmae="fuck"
            component="input"
            type="text"
            />
            <Field
              label="키워드(% 생략)"
              name="keyword"
              component={this.renderField}
            />
            <Field
              label="최대길이"
              name="maxValue"
              component={this.renderField}
            />
            <Field
              label="필수요소인가"
              name="isEssential"
              component={this.renderField}
            />
            <button
              className="btn btn-primary"
              type="submit"
              disabled={pristine || submitting}
            >저장</button>
            <button className="btn btn-light" disabled={pristine || submitting} onClick={reset}>취소</button>
          </div>
      </section>
    );
  }
}



export default connect(null, {createReplacement})(SgReplacements);