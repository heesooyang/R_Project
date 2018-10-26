import React, { Component } from 'react'
import { Tag } from 'antd'


class SgCustomTag extends Component {
  render() {
    return (
      <Tag {...this.props} className="customtag"/>
    )
  }
}


export default SgCustomTag
