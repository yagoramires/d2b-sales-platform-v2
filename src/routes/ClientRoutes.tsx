import {Routes, Route} from 'react-router-dom'

import ClientDashboard from '../pages/Client/ClientDashboard'

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ClientDashboard/>} />
    </Routes>
  )
}

export default ClientRoutes