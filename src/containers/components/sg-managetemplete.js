import React, {Component} from 'react'
import SgTable from './sg-table'
export default class SgManageTemp extends Component{

  render() {
    return(
      <section className="pages__managetemp">
        <h1>템플릿 관리</h1>
        <button className="managetemp__new"> + 새 템플릿</button>
        <div className="managetemp__search">
          <div className="managetemp__searchtitle">템플릿 키:</div>
          <input></input>
        </div>
        <div className="managetemp__search">
          <div className="managetemp__searchtitle">템플릿 제목:</div>
          <input></input>
        </div>
        <div className="managetemp__btnwrap">
        <button className="managetemp__searchbtn">검색</button>
        <button className="managetemp__resetbtn">초기화</button>
        </div>
        <SgTable />
      </section>
    );
  }
}