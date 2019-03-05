import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header'
import Sidebar from '../common/template/sideBar'
import Footer from '../common/template/footer'

export default props => (
  <div className='wrapper'>
    <Header />
    <Sidebar />
    <div>
      <h1>Content</h1>
    </div>
    <Footer />
  </div>
)
