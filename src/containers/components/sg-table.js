import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchTemplates } from '../../actions/fetch-templete';
// import { fetchTemplates } from '../../actions/fetch-templete'

import _ from 'lodash';
import { Link } from 'react-router-dom';


class SgTable extends Component {

  // componentDidMount(){
  //   this.props.fetchTemplates();
  // }
  //
  // renderTemplates() {
  //   return _.map(this.props.templates, template => {
  //     return (
  //       <li className="list-group-item" key={template.id}>
  //         <Link to={`/posts/${template.id}`}>
  //           {template.title}
  //         </Link>
  //       </li>
  //     );
  //   });
  // }

  render() {
    return (
      <table className="table__wrap">
        <colgroup>
          <col scope='row'/>
          <col scope='row'/>
          <col scope='row'/>
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
          <th className="table__head">마지막 수정일</th>
          <th className="table__head">최근 발송일</th>
          <th className="table__head">누적 발송건수</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className="table__body">asdf12</td>
          <td className="table__body">asdf12</td>
          <td className="table__body">asdf12</td>
          <td className="table__body">asdf12</td>
          <td className="table__body">asdf12</td>
          <td className="table__body">asdf12</td>
          <td className="table__body">asdf12</td>
          <ul>
            {/*{this.renderTemplates()}*/}
          </ul>
        </tr>
        </tbody>
      </table>
  );
  }
}
//
function mapStateToProps({ templates }) {

  return { templates };
}

export default connect(
  mapStateToProps,
  // { fetchTemplates }
  )(SgTable);
// export default SgTable;