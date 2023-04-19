import {Routes, Route} from 'react-router-dom'

import ClientDashboard from '../pages/Client/ClientDashboard'

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ClientDashboard/>}/>
      <Route path="/:industry" element={<ClientDashboard/>} />
      <Route path="/profile" element={<ClientDashboard/>} />
    </Routes>
  )
}

export default ClientRoutes