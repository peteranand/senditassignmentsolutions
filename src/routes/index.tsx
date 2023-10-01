import {ReactElement} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {ROUTES} from '../constants/routes.constants';
import {Admin} from '../pages/Admin/Admin';
import {Home} from '../pages/Home';
import {Login} from '../pages/Login';
import {ProtectedRoute} from './ProtectedRoute';
import {Share} from '../pages/Share';
import {Page404} from '../pages/Exceptions';

function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.BASE} element={<Navigate to={ROUTES.HOME} />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route
        path={ROUTES.ADMIN}
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route path={ROUTES.SHARE} element={<Share />} />
      <Route path={ROUTES.NOT_FOUND} element={<Page404 />} />
      <Route
        path={ROUTES.WILD_CARD}
        element={<Navigate to={ROUTES.NOT_FOUND} />}
      />
    </Routes>
  );
}

export default AppRoutes;
