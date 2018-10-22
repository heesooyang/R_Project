import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SgSendmsgSelecttemp from "./sg-sendmessage-selecttemp"
import SgSendmsgSelectuser from './sg-sendmessage-selectuser'


export default class SgSendMsg extends Component {
  render() {
    return (
      <section className="pages__sendmsg">
        <header className="sendmsg__header">
          <h1 className="h1">메시지 발송</h1>
        </header>
        <nav className="sendmsg__nav">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="http://localhost:3000/sendMsg/selecttemp">1. 템플릿 선택</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/sendMsg/selectuser">2. 수신인 선택</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">3. 메시지 확인</a>
            </li>
          </ul>
        </nav>
        <article className="sendmsg__content">

          <BrowserRouter>
            <Switch>
              <Route path="/sendMsg/selectuser" component={SgSendmsgSelectuser}/>
              <Route path="/sendMsg/selecttemp" component={SgSendmsgSelecttemp}/>

              <Route path="/sendMsg" component={SgSendmsgSelecttemp}/>


            </Switch>
          </BrowserRouter>

        </article>

      </section>
    )
  }
}