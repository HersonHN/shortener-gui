
var api = (process.env.NODE_ENV == 'production') ? window.location.origin : 'http://localhost:4000';

if (process.env.VUE_APP_SHORTENER_API_URL) {
  api = process.env.VUE_APP_SHORTENER_API_URL;
}

export const API = api;
