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
 *  - Implement max file size for upload files -  done
 *  - move upload file logic to component level - done
 *  - update admin page
 *  - implement message component for comming soon
 *  - check if there are anything else left to do from code that was lost
 */

/**
 * **New
 * Fields to add
 *  - Word Count/ Page Count
 *  - Deadline
 */

/**
 * Show status and other stuff in admin tables
 */


/**
 * Seperate cards right beside details for vieweing writer info and add writes etc
 * 
 * Task in progress phase - show who is working, days left till deadline
 * 
 * expose route to client to get info about his order, pay now button (?)
 * 
 */