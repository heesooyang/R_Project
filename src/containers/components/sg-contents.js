import React, {Component} from 'react'
import SgManageTemp from './sg-managetemplate'
import SgNewTemp from './sg-newtemplate'
import SgSendMsg from './sg-sendmessage'
import SgModifyTemp from './sg-modifytemplate'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


export default class SgContetns extends Component{

  render() {
    return(
      <div className="contents__wrap">

          <Switch>
            <Route path="/sendMsg" component={SgSendMsg}/>
            <Route path="/news" component={SgNewTemp}/>
            <Route path="/modify" component={SgModifyTemp}/>
            <Route exact path="/" component={SgManageTemp}/>
          </Switch>

      </div>
    );
  }
}