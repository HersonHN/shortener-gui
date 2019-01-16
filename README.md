# URL Shortener

An url shortener who does the same thing every other does, but this one is open source. :sunglasses:

It uses Express.js, GraphQL, Vue, and CouchDB to work.

You can check the code for the back-end of the application here: <https://github.com/HersonHN/shortener-api>

## Installation

Since this project is built with Vue, please use [Yarn](https://yarnpkg.com) for the setup.

```bash
git clone https://github.com/HersonHN/shortener-gui
cd shortener-gui
yarn
```

## Configuration

You need to specify the url for the backend api, to do so create an `.env` file on the root folder of this project with the variable `VUE_APP_SHORTENER_API_URL` pointing the api host. For instance:

```
VUE_APP_SHORTENER_API_URL=https://s.herson.hn
```

**⚠️ DO NOT add the slash at the end of the url. ⚠️**

**☝️ You can host both gui and api under the same hostname, but to built the code you still need to set the url. ☝️**

## Running

Then you can either run locally or build the code.

```bash
yarn serve
```

— or —

```bash
yarn build
```

## Running GUI and API on the Same Host

If you choose to build the code, just copy the `dist/` folder over your `shortener-api` instance and rename it as `public/`.
After that you can run the server and if the `VUE_APP_SHORTENER_API_URL` variable matches the hostname for the api, It shouldn't give you any problems.
