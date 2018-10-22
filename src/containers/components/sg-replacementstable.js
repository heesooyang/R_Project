import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

class SgReplacementsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderReplacements(values) {
    return _.map(values, replacement => {
      return (
        <tr key={replacement.title}>
          <td className="table__body">{replacement.title}</td>
          <td className="table__body">{replacement.keyword}</td>
          <td className="table__body">{replacement.maxByte}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="replacementstable__wrap">
      <label>변환자</label>
      <table className="table table-hover">
        <colgroup>
          <col scope='row'/>
          <col scope='row'/>
          <col scope='row'/>
        </colgroup>
        <thead>
        <tr>
          <th className="table__head">제목</th>
          <th className="table__head">키워드</th>
          <th className="table__head">최대길이</th>
        </tr>
        </thead>
        <tbody>
        {console.log('리플레이스먼트테이블 프롭스', this.props)}
        {this.renderReplacements(this.props.replacements)}
        </tbody>
      </table>
      </div>
    )
  }
}

function mapStateToProps({ replacements }) {
  return { replacements }
}

export default connect(
  mapStateToProps
)(SgReplacementsTable)