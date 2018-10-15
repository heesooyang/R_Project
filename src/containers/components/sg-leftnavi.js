import React, { Component } from 'react'


// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'


export default class SgLeftNavi extends Component {
constructor(props) {
  super(props);
  this.state = [];

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
          <li>발송서비스</li>
          <ul className="nav_secondmenu">
            <li>템플릿 관리</li>
            <li>메시지 발송</li>
            <li>서비스 설정</li>
          </ul>
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