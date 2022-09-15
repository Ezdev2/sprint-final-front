import axios from "axios";

axios.defaults.baseURL = `http://localhost:8080/`;
console.log();

export class Http {
  static async get(url, params) {
    try {
      const { data } = await axios.get(url, params);
      return data;
    } catch (e) {
      const error = e;
      // eslint-disable-next-line no-throw-literal
      throw `HTTP::GET, ${error.message}`;
    }
  }

  static async post(url, params) {
    try {
      const { data } = await axios.post(url, params);
      return data;
    } catch (e) {
      const error = e;
      // eslint-disable-next-line no-throw-literal
      throw `HTTP::POST, ${error.message}`;
    }
  }
}
