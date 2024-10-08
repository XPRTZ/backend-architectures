import { errorHandler } from '../../../src/core/middleware/errorHandler';
import { Request, Response } from 'express';

describe('Error Handler Middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: jest.Mock;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    nextFunction = jest.fn();
  });

  it('should handle errors and send appropriate response', () => {
    const error = new Error('Test error');
    errorHandler(error, mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Internal Server Error',
    });
  });

  it('should handle custom status codes', () => {
    const error: any = new Error('Not Found');
    error.statusCode = 404;
    errorHandler(error, mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Not Found',
    });
  });
});
