import { Auth0Provider } from '@auth0/auth0-react';

// Auth0 configuration
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL || window.location.origin;

export const auth0Config = {
  domain,
  clientId,
  authorizationParams: {
    redirect_uri: redirectUri,
    audience: `https://${domain}/api/v2/`,
  },
};

export function Auth0ProviderWithConfig({ children }) {
  if (!domain || !clientId) {
    console.warn(
      'Auth0 config missing. Set VITE_AUTH0_DOMAIN and VITE_AUTH0_CLIENT_ID in .env'
    );
    return children;
  }

  return (
    <Auth0Provider {...auth0Config}>
      {children}
    </Auth0Provider>
  );
}
