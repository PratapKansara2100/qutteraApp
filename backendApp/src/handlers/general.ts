import { json } from 'stream/consumers';
import Helpers from '../helpers';
import Axios, { AxiosInstance } from 'axios';

export default class General {
  helpers: Helpers;
  axios: AxiosInstance;

  constructor(helpers) {
    this.helpers = helpers;
    this.axios = Axios.create({
      timeout: 20000,
    });
  }

  async getScanFromQuttera(url) {
    try {
      const axiosConfig = {
        headers: { 'Accept-Encoding': 'gzip, deflate, br', Connection: 'keep-alive' },
      };

      const resp = await this.axios.post(
        <string>process.env.QUTTERA_ENDPOINT +
          process.env.QUTTERA_ENDPOINT_FILE_PATH +
          process.env.QUTTERA_API_KEY +
          `/url/scan/${url}`,
        axiosConfig,
      );

      return resp.data;
    } catch (err) {
      if (!err) {
        err = new Error('failed at the handler..');
      }
      throw err;
    }
  }

  async getReportFromQuttera(url) {
    try {
      const axiosConfig = {
        headers: { 'Accept-Encoding': 'gzip, deflate, br', Connection: 'keep-alive' },
      };

      const resp = await this.axios.get(
        <string>process.env.QUTTERA_ENDPOINT +
          process.env.QUTTERA_ENDPOINT_FILE_PATH +
          process.env.QUTTERA_API_KEY +
          `/url/report/${url}`,
        axiosConfig,
      );

      console.log('resp2', resp);
      return resp.data;
    } catch (err) {
      if (!err) {
        err = new Error('failed at the handler..');
      }
      throw err;
    }
  }
}
