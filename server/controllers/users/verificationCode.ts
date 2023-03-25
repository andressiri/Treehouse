// @description Send email verification code
// @route POST /api/v1/users/verification
// @access Private
import asyncHandler from "express-async-handler";
import { generateCode, requestTimeLimiter } from "../../helpers";
import { codeMail } from "../../templates";
import { sendEmail } from "../../config/mailer";
import { RequestWithUser } from "../../typings/express";

const verificationCode = asyncHandler(async (req, res) => {
  const { firstName, email } = (req as RequestWithUser).user;

  // check at least 10 seconds have passed from last mail sent
  requestTimeLimiter(req, res, "verificationCodeTimestamp", 10000);

  req.session.code = generateCode();
  req.session.emailToVerify = email;

  const mailTemplate = codeMail(firstName, req.session.code);
  const emailSuccess = await sendEmail(
    email,
    "Treehouse id verification",
    mailTemplate
  );

  if (emailSuccess.accepted[0] === `${email}`) {
    res.status(201).json({ message: "Email sent with the code" });

    if (process.env.NODE_ENV === "development")
      console.log(`code: ${req.session.code}`); // eslint-disable-line no-console
  } else {
    res.status(500);
    throw new Error("There was a problem sending the email, please try again");
  }
});

export default verificationCode;
