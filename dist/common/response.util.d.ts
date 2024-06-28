export interface ResponseFormat {
    status: string;
    data?: any;
    message?: string;
    error?: any;
}
export declare const successResponse: (data: any) => ResponseFormat;
export declare const errorResponse: (message: string, error?: any) => ResponseFormat;
