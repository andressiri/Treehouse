import path from "path";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.MAILER_MAIL,
    pass: process.env.MAIL_APP_PASSWORD,
  },
});

transporter.verify().then(() => {
  if (process.env.NODE_ENV === "development") {
    console.log("Ready to send mails..."); // eslint-disable-line no-console
  }
});

export const sendEmail = async (
  sendTo: string,
  subject: string,
  mailTemplate: string,
  replyTo?: string
) => {
  const mailSuccess = await transporter.sendMail({
    from: process.env.MAILER_MAIL,
    to: sendTo,
    subject,
    html: mailTemplate,
    replyTo: replyTo || "no-reply@treehouse.com",
  });
  return mailSuccess;
};
