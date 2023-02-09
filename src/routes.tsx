import React from 'react'
import { Route, Routes } from 'react-router-dom'

import LayoutContent from './containers/layoutContent'
import LayoutHome from './containers/layoutHome'
// import layoutContent from './containers/layoutContent'
import About from './pages/about'
import Home from './pages/home'
import SpinEkler from './pages/spinEkler'

const Routers: React.FC = () => {
  // const isAuth = localStorage.getItem('accessToken')
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutHome />}>
          <Route index element={<Home />} />
        </Route>

        <Route path='/' element={<LayoutContent />}>
          <Route path='/card-list' element={<About />} />
          <Route path='/table-verb' element={<About />} />
          <Route path='/spin-ekler' element={<SpinEkler />} />
          <Route path='/add-word' element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default Routers
