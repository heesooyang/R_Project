import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, reduxForm, change } from 'redux-form'
import { createTemplate, deleteTemplate, fetchTemplate, updateTemplate} from '../../actions/manage-templete'
import { createReplacement } from '../../actions/manage-replacement'
import SgReplacementsTable from './sg-replacementstable'
import SgReplacementsForm from './sg-replacementsform'
import { bindActionCreators } from 'redux'
import _ from 'lodash'


class SgModifyTemp extends Component {
  constructor(props){
    super(props)
    this.state = {row:{
      "authorId": 1,
      "key": "templateKey123",
      "title": "인증번호",
      "body": "인증번호 문자 입니다. 인증번호는 :keyword: 입니다.",
      "memo": "고객 이벤트 문자입니다.",
      "replacements": [
        {
          "title": "인증번호",
          "maxByte": "최대길이",
          "default": "기본 변환값",
          "isEssential": true,
          "keyword": "auth_number"
        }
      ]}
    }
    console.log("초기스테이트",this.state)
    console.log("초기프롭스", this.props)
  }
  componentDidMount() {

    const {location} = this.props
    const A = new URLSearchParams(location.search).get('id');
     this.props.fetchTemplate(A)
    console.log("컴포넌트디드마운트통해서페치텤플릿한후의 프롭스",this.props)
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    this.setState(
      {
        row:nextProps.templates.row
    }, () => {

      console.log("넥스트프롭스",nextProps.templates.row)
      console.log("새명주기후스테잉트",this.state)
      console.log("새명주기후프럽스",this.props)

    })
  }
  renderField(field) {
    const { meta: {touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`;

    return(
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
    const { meta: {touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger': ''} pages__textarea`;

    return(
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

  onSubmit(values) {
    // this.props.history.push('/');// 포스트가 완료되고 이동할지 안할지 모른다. fetch하는 시간이 걸리기때문에 창이동후 새목록이 불러지지않는다.
    this.props.updateTemplate(values, () => {
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!",values)
    });
    console.log("온서브밋한거",values)
    console.log("서브밋했을때 프롭스",this.props)
  }

  render() {
    const { handleSubmit, pristine, initialValues, reset, submitting, replacements  } = this.props;

console.log("랜더에프롭스",this.props.templates.row)
console.log("랜더스테이트",this.state)
    return (
      <section className="pages__modifytemp">
        <h1 className="h1">템플릿 수정</h1>
        {this.props.templates.row.replacements.map((item, index) => {
          return <SgReplacementsForm initialValues={item} key={index}/>
        })}
        <form
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
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
              <SgReplacementsTable />
          </div>
          <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button>
          <Link to="/" disabled={pristine || submitting} className="btn btn-danger">Cancel</Link>
        </form>
      </section>
    );
  }
}

function mapStateToProps({ replacements, templates}) {

  return { replacements, templates, initialValues: templates.row};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTemplate, createReplacement, fetchTemplate, updateTemplate }, dispatch)
}

export default reduxForm({
  form: 'TemplateModifyForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  updateUnregisteredFields: true
})(connect(mapStateToProps,mapDispatchToProps)(SgModifyTemp));