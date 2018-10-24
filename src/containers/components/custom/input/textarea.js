import React, { Component } from 'react'
import { Input } from 'antd'
const { TextArea } = Input;

class SgCustomTextArea extends Component {

  render() {
    return (

        <TextArea {...this.props} className="customtextarea"/>

    )
  }
}


export default SgCustomTextArea
