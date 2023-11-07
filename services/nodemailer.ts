import * as nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  host: `smtp.zoho.com`,
  secure: true,
  port: 465,
  auth: {
    user: process.env.MAILER_USERNAME,
    pass: process.env.MAILER_PASSWORD,
  },
});

export interface mailContentProps {
  to: string;
  subject: string;
  html: any;
}
export async function sendMail({ to, subject, html }: mailContentProps) {
  const mailOptions = {
    from: `support@itxgear.com`,
    to: to,
    subject: subject,
    html: html,
  };
  await transporter.sendMail(mailOptions);
}
