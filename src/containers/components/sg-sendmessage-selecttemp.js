import React, { Component } from 'react';
import SgSendmsgTable from './sg-sendmessagetable'

export default class SgSendmsgSelecttemp extends Component{
  render() {
    return(
      <div className="sendmsg__selecttemp">
      <h2 className="h2">템플릿 선택</h2>
      <div className="input-group mb-3 sendmsg__searchwrap">
      <input type="text" className="form-control" placeholder="템플릿키 혹은 제목으로 검색"
    aria-label="Recipient's username" aria-describedby="basic-addon2"/>
      <div className="input-group-append">
      <button className="btn btn-outline-secondary" type="button" id="button-addon2">search</button>
  </div>
  </div>
    <SgSendmsgTable />
    <nav aria-label="Page navigation">
      <ul className="pagination">
      <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
    </ul>
  </nav>
      </div>
  )
  }
}