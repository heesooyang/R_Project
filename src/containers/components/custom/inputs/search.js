import React, { Component } from 'react'
import { Input } from 'antd'
const { Search } = Input;

class SgCustomSearch extends Component {

  render() {
    return (
      <Search {...this.props} className="customsearch"/>
    )
  }
}


export default SgCustomSearch
