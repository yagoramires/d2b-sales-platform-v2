import { Routes, Route } from 'react-router-dom';

import ClientDashboard from '../pages/Client/ClientDashboard';
import Orders from '../pages/Client/Orders';
import Profile from '../pages/Client/Profile';
import Industry from '../pages/Client/Industry';

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ClientDashboard />}>
        <Route path='/orders' element={<Orders />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/new-order/:industry' element={<Industry />} />
      </Route>
    </Routes>
  );
};

export default ClientRoutes;
