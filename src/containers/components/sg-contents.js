import React, {Component} from 'react'
import SgManageTemp from './sg-managetemplete'
export default class SgContetns extends Component{

  render() {
    return(
      <div className="contents__wrap">
        This is contents
      <SgManageTemp  />
      </div>
    );
  }
}