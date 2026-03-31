import { Request, Response, NextFunction } from "express";

declare global {
  namespace Express {
    interface Request {
      userTimezone: string;
    }
  }
}

export const timezoneMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const tz = req.headers["x-timezone"] as string;

  const validTimezones = Intl.supportedValuesOf("timeZone");
  if (!tz || !validTimezones.includes(tz)) {
    req.userTimezone = "UTC";
  } else {
    req.userTimezone = tz;
  }

  next();
};
