import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email, company, product, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email, and message are required." });
    return;
  }

  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  if (!gmailPass) {
    res.status(500).json({ error: "Email service not configured." });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "biopaperpack@gmail.com",
      pass: gmailPass,
    },
  });

  const mailOptions = {
    from: `"BioPaperPack Website" <biopaperpack@gmail.com>`,
    to: "biopaperpack@gmail.com",
    replyTo: email,
    subject: `New Inquiry from ${name}${company ? ` — ${company}` : ""}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
        <div style="background: #1a3a2a; padding: 24px 32px; margin-bottom: 0;">
          <h1 style="color: #f5f5e8; font-size: 20px; margin: 0; letter-spacing: 2px; font-weight: 400;">BIOPAPERPACK</h1>
          <p style="color: #7ab88a; font-size: 11px; margin: 4px 0 0; letter-spacing: 3px; text-transform: uppercase;">New Website Inquiry</p>
        </div>
        <div style="background: #f9f7f0; padding: 32px; border: 1px solid #e0dcd0; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4d8; font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 2px; width: 120px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4d8; font-size: 14px; color: #1a1a1a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4d8; font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 2px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4d8; font-size: 14px; color: #1a1a1a;"><a href="mailto:${email}" style="color: #2d7a4a;">${email}</a></td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4d8; font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 2px;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4d8; font-size: 14px; color: #1a1a1a;">${company}</td>
            </tr>` : ""}
            ${product ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4d8; font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 2px;">Interest</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8e4d8; font-size: 14px; color: #1a1a1a;">${product}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 16px 0 4px; font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 2px; vertical-align: top;">Message</td>
              <td style="padding: 16px 0 4px; font-size: 14px; color: #1a1a1a; line-height: 1.7;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
        </div>
        <div style="padding: 16px 32px; background: #f0ede4; border: 1px solid #e0dcd0; border-top: none;">
          <p style="margin: 0; font-size: 11px; color: #999; letter-spacing: 1px;">Sent from biopaperpack.com — Reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

export default router;
