import React from 'react';
import { Outlet } from 'react-router-dom';
import { Section } from '../../styles/section';

const AdminDashboard = () => {
  return (
    <Section>
      <Outlet />
    </Section>
  );
};

export default AdminDashboard;
