import {Routes, Route} from 'react-router-dom'

import Login from '../pages/Auth/Login'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
    </Routes>
  )
}

export default AuthRoutes