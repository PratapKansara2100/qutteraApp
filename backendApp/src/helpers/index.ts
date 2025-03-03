import { json } from 'stream/consumers';
import { EndpointInfo } from './../types/common';

export default class Helpers {
  async handleRoute(
    handlerFunction: Promise<any>,
    endpointInfo: EndpointInfo,
  ): Promise<{ success: string; statusCode: number; message: string; [key: string]: any }> {
    try {
      let responseObj: any = {};

      const resp = await handlerFunction;

      responseObj = {
        ...endpointInfo.success,
        ...resp,
      };

      if (responseObj.success !== false) responseObj.success = true;

      //   console.log(JSON.stringify(responseObj));
      return responseObj;
    } catch (error: any) {
      let responseObj: any = {};

      console.log('error 2', error.message);
      if (!error) error = new Error('Unknown err...');
      if (typeof error !== 'undefined') responseObj = error;

      const { error: { message: errorMessage = null, statusCode: number = 400 } = {} } =
        endpointInfo;

      responseObj.success = false;
      responseObj.message = errorMessage || error.message || 'Unkown error...';
      responseObj.statusCode = error.statusCode || 400;

      throw responseObj;
    }
  }

  matchRegex(string: String, regex: any): boolean {
    return regex.test(string);
  }
}
