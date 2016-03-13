# Solfege UI 

This is the initial version of Solfege UI using React, TypeScript and Webpack to tie it all together.

## npm scripts

### Dev
```bash
$ npm run dev
```

This runs a development mode server with live reload etc.

Open `http://localhost:8080` in your browser.

### Production

```bash
npm install
npm start
```

This runs a production-ready express server that serves up a bundled and
minified version of the client.

Open `http://localhost:8080` in your browser.

> Note: Demo username/password can be found [here](https://github.com/rangle/typescript-react-redux-starter/blob/master/src/api/mock/users.tsx)

### Tests

#### Single Run
```bash
$ npm run test
```

#### Watch Files
```bash
$ npm run test:watch
```

#### Coverage
```bash
$ npm run cover
```

#### Connecting to remote APIs

Both the devmode and production servers provide a way to proxy requests to
remote HTTP APIs.  This can be useful for working around CORS issues when
developing your software.

Edit [this file](server/proxy-config.js) to mount such APIs at a given path.

## If something doesn't work

We centralize issue management for all rangle starters in the [rangle-starter](https://github.com/rangle/rangle-starter) repository, to help us keep things consistent.

Refer to the [issues section](https://github.com/rangle/rangle-starter/issues) to see if this has already been logged. Otherwise create a [new issue](https://github.com/rangle/rangle-starter/issues/new).

Be sure to tag your new issue with the 'ts-react' label so we can see which starter you're filing it for.

## License

Copyright (c) 2016 kosz 
