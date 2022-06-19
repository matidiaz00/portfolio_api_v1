import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { setResponse, RequestInterface } from './app.errors';

@Catch(HttpException)
export class HttpErrorsFilter implements ExceptionFilter {
    catch(exception: HttpException | any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        if (exception) {
            const exception_response = exception.getResponse();
            const status = (exception instanceof HttpException) ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
            const messages = {
                general: exception_response.message_general,
                developer: exception_response.message_developer,
                client: exception_response.message_client
            }
            console.log(exception_response.error)
            Logger.error(exception);
            const requestData: RequestInterface = {
                status: status,
                timestamp: new Date(),
                instance: request.url,
                path: request.url,
                response: exception.stack ? exception.stack.split('\n    ') : null,
                headers: request.headers,
                body: request.body,
                message: messages
            };
            return response.status(status).json( setResponse(requestData) );
        } else {
            console.error('Problem to get exception: ', exception)           
        }
    }
}