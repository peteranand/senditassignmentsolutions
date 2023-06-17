import {ReactElement} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {ROUTES} from '../constants/routes.constants';

function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.BASE_ROUTE} element={<Navigate to={ROUTES.HOME} />} />
      <Route path={ROUTES.TEST} element={<NewLaunches />} />
    </Routes>
  );
}

export default AppRoutes;
