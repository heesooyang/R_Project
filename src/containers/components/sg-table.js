import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTemplates, deleteTemplate, fetchTemplate } from '../../actions/manage-templete'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'


class SgTable extends Component {

  constructor(props) {
    super(props)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchTemplates()
  }

  onDeleteClick(event,value) {
    event.stopPropagation();
    this.props.deleteTemplate(value, () => {
      this.props.fetchTemplates()
    })
  }

  onRetrieveClick(id) {
    // this.props.fetchTemplate(value, () => {
    //   this.props.history.push(`/modify/${value}`)
    // })
       this.props.history.push(`/modify?id=${id}`)

  }

  renderTemplates() {
    return _.map(this.props.templates.rows, (template, idx) => {
      if (template.body.length < 80) {
        return (
          <tr key={idx}
              onClick={() => {
                this.onRetrieveClick(template.id)
              }}
          >
            <td>{template.key}</td>
            <td className="badge badge-primary">sms</td>
            <td>{template.title}</td>
            <td>{template.body}</td>
            <td>{template.updatedAt}</td>
            <td>{template.id}</td>
            <td>{template.key}</td>
            <td>
            <button
              className="btn btn-danger"
              onClick={(event) => {
                this.onDeleteClick(event,template.id)
              }}>x
            </button>
            </td>
          </tr>
        )
      }
      else {
        return (
          <tr key={idx}
              onClick={() => {
                this.onRetrieveClick(template.id)
              }}
          >
            <td>{template.key}</td>
            <td className="badge badge-warning">Lms</td>
            <td>{template.title}</td>
            <td>{template.body}</td>
            <td>{template.updatedAt}</td>
            <td>{template.key}</td>
            <td>{template.id}</td>
            <button
              className="btn btn-danger"
              onClick={(event) => {
                this.onDeleteClick(event,template.id)
              }}
            >x
            </button>
          </tr>
        )
      }
      // mapDispatchToProps : 컴퍼넌트의 props로 전달된 함수를 실행할 때, 특정한 action을 전달하도록 한다.
    })
  }

  renderMocks() {
    return _.map(this.props.mocks, mock => {
      return (
        <tr key={mock.authorId}>
          <td>{mock.key}</td>
          <td>{mock.title}</td>
          <td>{mock.title}</td>
          <td>{mock.body}</td>
          <td>{mock.title}</td>
          <td>{mock.replacements.title}</td>
          <td>{mock.memo}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <table className="table__wrap table table-hover">
        <colgroup>
          <col scope='row' width="15%"/>
          <col scope='row' width="5%"/>
          <col scope='row' width="15%"/>
          <col scope='row' width="35%"/>
          <col scope='row' width="10%"/>
          <col scope='row' width="10%"/>
          <col scope='row' width="10%"/>
        </colgroup>
        <thead>
        <tr>
          <th className="table__head">템플릿 키</th>
          <th className="table__head">타입</th>
          <th className="table__head">제목</th>
          <th className="table__head">내용</th>
          <th className="table__head">마지막 수정일</th>
          <th className="table__head">최근 발송일</th>
          <th className="table__head">누적 발송건수</th>
        </tr>
        </thead>
        <tbody>
        {this.renderTemplates()}
        {/*{this.renderMocks()}*/}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ templates, mocks }) {
  return { templates, mocks }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTemplates, deleteTemplate, fetchTemplate }, dispatch)
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SgTable))
