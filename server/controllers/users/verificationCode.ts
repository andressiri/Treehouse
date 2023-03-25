// @description Send email verification code
// @route POST /api/v1/users/verification or /api/v1/users/forgot-password
// @access Private or Public
import asyncHandler from "express-async-handler";
import { generateCode, requestTimeLimiter } from "../../helpers";
import { codeMail } from "../../templates";
import { sendEmail } from "../../config/mailer";
import { RequestWithUser } from "../../typings/express";
import db from "../../db/models";

const { User } = db;

const verificationCode = asyncHandler(async (req, res) => {
  let firstName: string;
  let email: string;
  if ((req as RequestWithUser).user) {
    firstName = (req as RequestWithUser).user.firstName;
    email = (req as RequestWithUser).user.email;
  } else {
    email = req.body.email;

    const userName = await User.findOne({
      raw: true,
      attributes: ["firstName"],
      where: { email },
    });

    if (!userName) {
      res.status(404);
      throw new Error("No user registered with that email");
    }

    firstName = userName.name;
  }

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
