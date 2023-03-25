// can request: check at least ${timeToWait} has passed from last request that reached this point
import { Response } from "express";
import { RequestWithSession } from "../typings/express";

const requestTimeLimiter = (
  req: RequestWithSession,
  res: Response,
  sessionTimestampAttribute: string,
  timeToWait: number
) => {
  let timePassedBetweenRequests = 0;
  if (!req.session[sessionTimestampAttribute]) {
    req.session[sessionTimestampAttribute] = Date.now();
    timePassedBetweenRequests = timeToWait;
  } else {
    const auxDate = Date.now();
    timePassedBetweenRequests =
      auxDate - req.session[sessionTimestampAttribute];
  }
  if (timePassedBetweenRequests < timeToWait) {
    res.status(429);
    throw new Error(
      `You should wait ${Math.floor(
        (timeToWait - timePassedBetweenRequests) / 1000
      )}s to try again`
    );
  } else {
    req.session[sessionTimestampAttribute] = Date.now();
  }
};

export default requestTimeLimiter;
