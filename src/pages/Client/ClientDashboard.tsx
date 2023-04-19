import Header from '../../components/ClientComponents/Header';
import { Outlet } from 'react-router-dom';

const ClientDashboard = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ClientDashboard;
