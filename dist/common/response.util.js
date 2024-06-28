"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
const successResponse = (data) => {
    return {
        status: 'success',
        data,
    };
};
exports.successResponse = successResponse;
const errorResponse = (message, error) => {
    return {
        status: 'error',
        message,
        error,
    };
};
exports.errorResponse = errorResponse;
//# sourceMappingURL=response.util.js.map