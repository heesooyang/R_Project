import React from 'react'
import SgLeftNavi from '../components/sg-leftnavi'
import SgHeader from '../components/sg-header'
import SgContents from '../components/sg-contents'


const App = () => (
  <div className="app">
      <SgHeader />
      <SgLeftNavi />
        <SgContents/>
  </div>
)

export default App
