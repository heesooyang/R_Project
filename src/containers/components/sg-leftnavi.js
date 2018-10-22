import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SgNewTemp from './sg-newtemplate'
import SgManageTemp from './sg-managetemplate'
import SgSendMsg from './sg-sendmessage'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'


export default class SgLeftNavi extends Component {
constructor(props) {
  super(props);
  this.state = "";

}
  // setTerm(){
  // this.setState({     // 서버랑 통신해서 목록불러오기.
  //   term: [1,2,3]
  // })
  // }



  render() {

    return(
      <nav className="nav__wrap">
      <div className="nav__logowrap">
        TITLE
      </div>
        <ul className="nav__firstmenu">
          <li className="nav__item" activeClassName="active">발송서비스</li>
          <ul className="nav_secondmenu">
            <li><NavLink className="nav__item" activeClassName="active" exact to="/">템플릿 관리</NavLink></li>
            <li><NavLink className="nav__item" activeClassName="active" to="/sendMsg">메시지 발송</NavLink></li>
          </ul>
          <li>서비스 설정</li>

        </ul>
      </nav>
    );
  }


}



//
// const mapStateToProps = () => {
//
// }
//
// const mapDispatchToProps = () => {
//
// }
//
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SgLeftNavi)