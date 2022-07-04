import React, { useState, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './components/NavBar/NavBar'
import Loading from './components/Loading/Loading'

const Main = lazy(() => import('./components/Main/Main'))
const AuthReg = lazy(() => import('./components/AuthReg/AuthReg'))
const Profile = lazy(() => import('./components/Profile/Profile'))

const Booking = lazy(() => import('./components/Booking/Booking'))
const Reviews = lazy(() => import('./components/Reviews/Reviews'))
const FAQ = lazy(() => import('./components/FAQ/FAQ'))
const Rules = lazy(() => import('./components/Rules/Rules'))
const Politic = lazy(() => import('./components/Politic/Politic'))


const App = () => {

  const [lengToggle, setLengToggle] = useState(true)

  const [auth, setAuth] = useState(true)

  return (
    <div className="App">
      <Router>
        <NavBar lengToggle={lengToggle} setLengToggle={setLengToggle}/>
        {
          auth?
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route exact path='/' element={<Main />} />
              <Route path='/auth' element={<AuthReg />} />
              <Route path='/profile' element={<Profile />} />

              <Route path='/booking' element={<Booking/>} />

              {/* HomesList */}
              {/* HomeItem */}

              <Route path='/reviews' element={<Reviews />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/rules' element={<Rules />} />
              <Route path='/politic' element={<Politic />} />
            </Routes>
          </Suspense>
          :
        <AuthReg/>
      }
      </Router>
  </div>
  )
}

export default App
