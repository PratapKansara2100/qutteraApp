import express from 'express';

export interface EndpointInfo {
  success?: {
    message?: string;
    statusCode?: number;
  };
  error?: {
    message?: string;
    statusCode?: number;
  };
  /** Express request, contains custom keys  */
  req: express.Request & any;
}
