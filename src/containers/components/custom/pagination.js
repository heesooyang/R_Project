import React, { Component } from 'react'
import { Pagination } from 'antd'



class SgCustomPagination extends Component {

  render() {

    return (

      <Pagination {...this.props} className="custompagination"/>

    )
  }
}

export default SgCustomPagination


