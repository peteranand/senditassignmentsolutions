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

/**
 * Seperate cards right beside details for vieweing writer info and add writes etc
 *
 * Task in progress phase - show who is working, days left till deadline
 *
 * expose route to client to get info about his order, pay now button (?)
 *
 * new tab to open details of job during processing phase
 *
 * show notification or status based on job deadline nearing end
 * 
 * renmae phase done to delivered
 * 
 * remove header useless stuff
 * 
 * terms and conditions with tick mark to accept tearms before submitting order (user's side)
 * 
 * show message a message saying someone will contact you via whatsapp or email 
 * 
 * copy share url bug- other users cant see date count down
 * 
 * 
 * support floating button - gives user a contact number; in future show common issues with soln
 * toggle a card to the left of floating button saying "need any help" after a couple of seconds
 * 
 * FAQ section
 *
 */
