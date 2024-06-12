import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const xApi = req.headers['x-api-key'];
    console.log(xApi);
    next();
  }
}
