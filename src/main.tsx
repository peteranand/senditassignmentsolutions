import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
// import {} from './firebase/init';
import AppRoutes from './routes';
import {PageLayout} from './layout';

import './global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageLayout>
        <AppRoutes />
      </PageLayout>
    </BrowserRouter>
  </React.StrictMode>
);


/**
 * 
 * 
 * TODO:
 *  - Implement max file size for upload files
 *  - move upload file logic to component level
 *  - update admin page
 *  - check if there are anything else left to do from code that was lost
 */