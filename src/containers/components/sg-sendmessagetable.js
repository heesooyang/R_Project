import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTemplates } from '../../actions/manage-templete';
import _ from 'lodash';
import { Link } from 'react-router-dom';


class SgSendmsgTable extends Component {

  componentDidMount(){
    this.props.fetchTemplates();

  }

  renderTemplates() {
    console.log("받아온프롭스템플릿s",this.props.templates)
    return _.map(this.props.templates.rows, (template, idx) => {
      return (
        <tr key={idx}>
          <td>{template.key}</td>
          <td>{template.authorId}</td>
          <td>{template.title}</td>
          <td>{template.body}</td>

        </tr>
      );
    });
  }

  renderMocks(){
    return _.map(this.props.mocks, mock => {
      return(
        <tr  key={mock.authorId}>
          <td>{mock.key}</td>
          <td>{mock.title}</td>
          <td>{mock.title}</td>
          <td>{mock.body}</td>


        </tr>
      )
    })
  }

  render() {
    console.log("shittjfuc",this.props.templates)
    return (
      <table className="table__wrap table table-hover">
        <colgroup>
          <col scope='row'/>
          <col scope='row'/>
          <col scope='row'/>
          <col scope='row'/>


        </colgroup>

        <thead>
        <tr>
          <th className="table__head">템플릿 키</th>
          <th className="table__head">타입</th>
          <th className="table__head">제목</th>
          <th className="table__head">내용</th>

        </tr>
        </thead>
        <tbody>

        {this.renderTemplates()}

        {/*{this.renderMocks()}*/}
        </tbody>


      </table>

    );
  }
}
//
function mapStateToProps({ templates, mocks }) {

  return { templates, mocks };
}

export default connect(
  mapStateToProps,
  { fetchTemplates }
)(SgSendmsgTable);
// export default SgTable;