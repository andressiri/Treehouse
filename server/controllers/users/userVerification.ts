// @description Email verification with code sent
// @route PUT /api/v1/users/verification/:code
// @access Public - It requires previous code socilitation
import asyncHandler from "express-async-handler";
import { BY_CODE } from "../../config/constants";
import { createToken, requestTimeLimiter } from "../../helpers";
import db from "../../db/models";

const { User } = db;

const userVerification = asyncHandler(async (req, res) => {
  const code = req.params[BY_CODE];
  const email = req.session.emailToVerify;

  if (!code) {
    res.status(400);
    throw new Error("Please provide the code sent to your email");
  }

  if (!req.session.code || !email) {
    res.status(428);
    throw new Error("No code was required before");
  }

  // check at least 5 seconds have passed from last code check
  requestTimeLimiter(req, res, "codeCheckTimestamp", 5000);

  if (code !== req.session.code) {
    res.status(401);
    throw new Error("Code doesn't match");
  }

  const updateResult = await User.update(
    { verified: true },
    {
      where: { email },
      returning: true,
      raw: true,
    }
  );

  const id = updateResult[1][0].id;

  req.session.verified = true;

  res.status(200).json({
    message: "Code is correct, email verified",
    data: createToken(id, true),
  });
});

export default userVerification;
