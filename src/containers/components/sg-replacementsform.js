import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createReplacement } from '../../actions/manage-replacement'


class SgReplacementsForm extends Component{

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

  onSubmit(values) {
    this.props.createReplacement(values, () => {

      //modal display none으로.
    });
  }

  render() {
    console.log("리플레이스먼트프롭스",this.props)
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return(
      <section className="newtemp__replacementsmodal">
        <h2 className="h2">키워드 생성</h2>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div>
            <Field
              label="관리용 제목"
              name="title"
              component={this.renderField}
            />
            <Field
              label="키워드(% 생략)"
              name="keyword"
              component={this.renderField}
            />
            <Field
              label="최대길이"
              name="maxByte"
              component={this.renderField}
            />
            <Field
              label="기본 변환값"
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

        </form>
      </section>
    );
  }
}



export default reduxForm({
  form: 'ReplacementsForm',
  enableReinitialize: true
})(connect(null, { createReplacement })(SgReplacementsForm));