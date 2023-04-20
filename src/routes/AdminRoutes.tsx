import { Routes, Route, Navigate } from 'react-router-dom';

import AdminDashboard from '../pages/Admin/AdminDashboard';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AdminDashboard />}>
        <Route path='/' element={<Navigate to='/orders' />} />
        <Route path='/*' element={<Navigate to='/' />} />
        <Route path='/orders' element={<Navigate to='/' />} />
        <Route path='/clients' element={<Navigate to='/' />} />
        <Route path='/industries' element={<Navigate to='/' />} />
        <Route path='/networks' element={<Navigate to='/' />} />
        <Route path='/profile' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
