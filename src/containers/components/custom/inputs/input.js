import React, { Component } from 'react'
import { Input } from 'antd'
import SgCustomTextArea from './textarea'
import SgCustomSearch from './search'


class SgCustomInput extends Component {
static SgCustomTextArea = SgCustomTextArea
  static SgCustomSearch = SgCustomSearch


  render() {

    return (

        <Input {...this.props} className="custominput"/>

    )
  }
}

export default SgCustomInput


