import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import App from './App';

import store from './app/store';
import { Provider } from 'react-redux';

// start worker in development mode
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
 
  const { worker } = await import('./api/browser')
 
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({ onUnhandledRequest: 'bypass' })
}

const root = ReactDOM.createRoot(document.getElementById('root'));
enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
})