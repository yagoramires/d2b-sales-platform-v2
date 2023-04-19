import AuthRoutes from './routes/AuthRoutes';
import AdminRoutes from './routes/AdminRoutes';
import ClientRoutes from './routes/ClientRoutes';

import { GlobalStyles } from './styles/global';

function App() {
  const user = true;
  const admin = false;

  return (
    <div className='App'>
      {!user && admin && <AuthRoutes />}
      {user && admin && <AdminRoutes />}
      {user && !admin && <ClientRoutes />}
      <GlobalStyles/>
    </div>
  );
}

export default App;
