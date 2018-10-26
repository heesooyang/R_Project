import React, { Component } from 'react'
import { Steps } from 'antd'
// const Step = Steps.Step;

class SgCustomSteps extends Component {
  static SgCustomStep = Steps.Step;
  render() {
    return (
      <Steps {...this.props} className="customsteps"/>
    )
  }
}

export default SgCustomSteps


