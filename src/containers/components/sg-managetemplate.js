import React, {Component} from 'react'
import SgTable from './sg-table'
export default class SgManageTemp extends Component{

  onNewClick(){
    const path = '/news';
    this.props.history.push(path);
  }

  render() {
    return(
      <section className="pages__managetemp">
        <h1>템플릿 관리</h1>
        <button
          className="btn btn-secondary managetemp__new"
          onClick={this.onNewClick.bind(this)}
        > + 새 템플릿</button>
        <div className="managetemp__search">
          <div className="managetemp__searchtitle">템플릿 키:</div>
          <input></input>
        </div>
        <div className="managetemp__search">
          <div className="managetemp__searchtitle">템플릿 제목:</div>
          <input></input>
        </div>
        <div className="managetemp__btnwrap">
        <button className="btn btn-success managetemp__searchbtn">검색</button>
        <button className="btn btn-secondary managetemp__resetbtn">초기화</button>
        </div>
        <SgTable/>
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </section>
    );
  }
}