import Header from '../../components/ClientComponents/Header';
import { Outlet } from 'react-router-dom';
import { Section } from '../../styles/section';

const ClientDashboard = () => {
  return (
    <>
      <Header />
      <Section>
        <Outlet />
      </Section>
    </>
  );
};

export default ClientDashboard;
