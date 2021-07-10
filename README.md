# First Time App Deployment
Configure app in git.config.sh script
Create app with 02.heroku.ab.sh script 

# Deploy Multiple Apps
two nuxtjs apps
and a hapi

## lb-a
* npm install --save-dev @babel/plugin-syntax-jsx
* Add dotenv package "npm install dotenv"
* Default port 3000
* Did not Fix Docker compose warnings
* Add HAPI_URL to .env
* Add HAPI_URL to nuxt.config.js
* Add environment variable test as env.spec.js
* Add salutaion test to Logo.spec.js
* Add salutation call to logo component  
* Add mixins folder, add ApiHandlers.js to mixins/
* Fix path to .env in environment test (env.spec.js)
* Fix path transform in jest.config.js, Add <rootDir>/node_modules/
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  }
* Unable to run tests in docker:
    (Running coverage on untested files...Failed to collect coverage from /usr/src/pages/index.vue)

## lb-b
* Add dotenv package "npm install dotenv"
* Change to port 3001
  https://nuxtjs.org/docs/2.x/features/configuration#edit-host-and-port

## hapi-api
* Change to port 5555
  https://hapi.dev/tutorials/?lang=en_US

* Add CORS to /salutaion_route.js
* Add at least one test, or strange errors will occur
