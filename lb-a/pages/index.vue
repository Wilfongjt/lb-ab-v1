<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        lb-a
      </h1>

      <ul>
        <li>run default nuxtjs</li>

        <li>configure nuxt.config.js, add  server: {
           port: process.env.PORT || 3000 // default: localhost
        }</li>
        <li>Hapi-api</li>
        <li>Heroku Settings: HOST 0.0.0.0</li>

        <li>hapi-api ... install npm install --save-dev @babel/preset-react in package.json</li>
        <li>.babelrc ... "presets": ["@babel/preset-react","@babel/preset-env"]</li>
        <li>Support for the experimental syntax 'jsx' isn't currently enabled</li>
        <li>npm install --save-dev @babel/plugin-syntax-jsx</li>
        <li>  "plugins": ["@babel/plugin-syntax-jsx","@babel/plugin-transform-runtime"]</li>
        <li> Warning: heroku update available from 7.54.1 to 7.56.1.</li>
      </ul>

      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
