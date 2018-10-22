import React from 'react'
import SgLeftNavi from '../components/sg-leftnavi'
import SgHeader from '../components/sg-header'
import SgContents from '../components/sg-contents'
import About from '../about'
import SgNewTemp from '../components/sg-newtemplate'
import SgManageTemp from '../components/sg-managetemplate'
import SgSendMsg from '../components/sg-sendmessage'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

const App = () => (
  <div className="app">
      <SgHeader />
      <SgLeftNavi />
        <SgContents/>


  </div>
)

export default App
