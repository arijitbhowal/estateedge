import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
    <Auth0Provider
    domain="dev-xg3dnnlrc6saqt6k.us.auth0.com"
    clientId="KP7W6TmgdPSkDCWiQ7I4pQXoFkX6Do3j"
    authorizationParams={{
      redirect_uri: "http://localhost:5173"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
    </MantineProvider>
  </React.StrictMode>
);
