
var api = (process.env.NODE_ENV == 'production') ? '' : 'http://localhost:4000';

if (process.env.SHORTENER_API_URL) {
  api = process.env.SHORTENER_API_URL;
}

export const API = api;
