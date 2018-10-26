import { Table } from 'antd';
import React, { Component } from 'react'


class SgCustomTable extends Component {

  render() {
    return (
      <Table {...this.props} className="customtable"/>
    )
  }
}



export default SgCustomTable


