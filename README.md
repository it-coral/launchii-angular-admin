# Launchii

[![Build Status](https://circleci.com/gh/launchii/launchii.svg?style=shield&circle-token=3876ee4795691fdae21450d22c99bd6a8c939e18)](https://circleci.com/gh/launchii)

## Getting started

### Install Node modules and Bower Components

First off, you will need to install the required modules:

```
    npm install
    bower install
```

*Please notify a team member if the specs are not passing.*

### Configuration

Set up api domain in `app/core/constants.js`. Make sure to add a trailing slash.

### Start up server:

Spin up the development server using Foreman:

```
    bundle exec foreman start -f Procfile.dev
```

*You will need to have the [Foreman](https://github.com/ddollar/foreman) installed locally.*

### Open:

Navigate to the website via your browser:

```
    http://localhost:5000
```

*I would advise using [POW](http://pow.cx) locally since we will be using subdomain constraints on our routes*