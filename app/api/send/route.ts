import { getEmailTemplateHtml } from "../../_utils/renderEmail"; 
import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  // console.log({body});
  // console.log("HI");
  

  try {
    const html = await getEmailTemplateHtml(body); // Renders the email HTML

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or another SMTP service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"DoShare" <${process.env.EMAIL_USER}>`,
      to: body.emailToSend, // recipient
      subject: `DO Share : Download File `,
      html, // rendered HTML from React Email
    });

    return Response.json({ message: "Email sent successfully " });
  } catch (error) {
    console.error("Failed to send email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email " }),
      { status: 500 }
    );
  }
}



// by nodemailer

//resend