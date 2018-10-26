import React, { Component } from 'react'
import { Button } from 'antd'



class SgCustomButton extends Component {

  render() {

    return (

      <Button {...this.props} className="custombtn"/>

    )
  }
}

export default SgCustomButton


