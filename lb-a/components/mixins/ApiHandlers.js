
class ApiHandlers {
  /*
  consistant interface with AAD API Web Services
  * dont be tempted to put process code here. put in calling component
  */
  constructor (component) {
    // component is the nuxt component
    this.component = component
  }
  async apiSalutaion (apiURL, apiHeader, apiBody) {
    const response = await this.component.$axios({
      url: apiURL,
      method: 'post',
      headers: apiHeader,
      data: apiBody })
    return response
  }

}

export { ApiHandlers }
