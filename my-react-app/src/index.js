import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-eerwlgs1ux6gzfie.us.auth0.com"
            clientId="m6iay2XIysGBdpi5rTy16vH30F9PQ3nb"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <App />

        </Auth0Provider>
    </React.StrictMode>
);
