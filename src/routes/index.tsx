import { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../constants/routes.constants';
import { Home } from '../pages/Home';

function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.BASE} element={<Navigate to={ROUTES.HOME} />} />
    </Routes>
  );
}

export default AppRoutes;
