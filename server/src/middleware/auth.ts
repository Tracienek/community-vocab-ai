import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface JwtPayload { id: string; username: string; }

// bổ sung type cho req.user
declare module 'express-serve-static-core' {
  interface Request {
    user?: JwtPayload;
  }
}

// required mặc định là true (chữ thường!)
export function auth(required = true) {
  return (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers.authorization;
    if (!header) {
      if (!required) return next();
      return res.status(401).json({ message: 'Missing Authorization header' });
    }
    const token = header.replace(/^Bearer\s+/i, '').trim();

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
      req.user = payload;
      next();
    } catch {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
}
