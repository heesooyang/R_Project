import React from 'react'
import { Route, Link } from 'react-router-dom'
import SgLeftNavi from '../components/sg-leftnavi'
import SgHeader from '../components/sg-header'
import SgContents from '../components/sg-contents'
import About from '../about'

const App = () => (
  <div className="app">
    {/*<header>*/}
    {/*<Link to="/">Home</Link>*/}
    {/*<Link to="/about-us">About</Link>*/}
    {/*</header>*/}

    <SgHeader />
    <SgLeftNavi />
    <SgContents />

    {/*<Route exact path="/" component={SgHome} />*/}
    {/*<Route exact path="/about-us" component={About} />*/}

  </div>
)

export default App
