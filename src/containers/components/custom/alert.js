import React, { Component } from 'react'
import { Alert } from 'antd'


class SgCustomAlert extends Component {
  render() {
    return (
      <Alert {...this.props} className="customalert"/>
    )
  }
}


export default SgCustomAlert
