export interface ResponseFormat {
    status: string;
    data?: any;
    message?: string;
    error?: any;
  }
  
  export const successResponse = (data: any): ResponseFormat => {
    return {
      status: 'success',
      data,
    };
  };
  
  export const errorResponse = (message: string, error?: any): ResponseFormat => {
    return {
      status: 'error',
      message,
      error,
    };
  };