import { AppError } from "@errors/AppError"
import { NextFunction, Request, Response } from 'express';
import "express-async-errors"
function errorMiddleware(err: Error, request: Request, response: Response, _next: NextFunction) {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        });
    }
    return response.status(500).json({
        status: 'Error',
        message: `Internal Server Error ${err.message}`
    });
}
export { errorMiddleware }