import React, { Component } from 'react';


export default class SgSendmsgSelectuser extends Component{
  render() {
    return(
      <div className="sendmsg__selectuser">
        <h2 className="h2">수신인 선택</h2>
        <div className="selectuser__infobox">
          <span>수신인 정보</span>
          <div className="selectuser__info">
            <span>* 휴대폰번호 : </span>
            <input type="text" />
            <span>%NAME% : </span>
            <input type="text" />
            <button className="btn btn-danger">-</button>
          </div>
          <button className="btn btn-danger">추가</button>
        </div>
      </div>
    )
  }
}