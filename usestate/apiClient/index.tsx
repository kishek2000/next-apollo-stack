/**
 * Defined fields/types for the API.
 */
export interface API {
  /**
   * The url access point for the API.
   */
  url: string;
  /**
   * The request headers for a given request
   */
  requestHeaders: HeadersInit;
}

/**
 * APIController Class for requests to the public API at
 * weatherstack.com.
 *
 * API Key stored locally in env file.
 */
export class APIController implements API {
  url: string;
  requestHeaders: HeadersInit;

  constructor() {
    this.url = "http://api.weatherstack.com";
    this.requestHeaders = ["Content-type"]["application/json"];
  }

  public async getWeatherForCity(city: string) {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=700d837567d63137df8bf61a83decaa5&query=${city}`
    );
    return await response.json();
    // console.log(json);
    // return json;
  }
}
