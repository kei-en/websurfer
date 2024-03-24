"use server"
import {z} from "zod";
import transporter from "@/lib/nodemailer";

const FormSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    url: z.string().url(),
    category: z.string(),
});


export async function createSubmission(formData: FormData) {
    const {name, email, url, category} = FormSchema.parse({
        name: formData.get("name"),
        email: formData.get("email"),
        url: formData.get("url"),
        category: formData.get("category"),
    });

    const mailOptions = {
        from: email,
        to: process.env.GMAIL_APP_USERNAME,
        subject: "New Site submission",
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
            <head>
                <meta charset="utf-8">            
                <title>New Site Submission</title>
                <meta name="description" content="New interesting/fun/weird site submitted">
                <meta name="author" content=${name}>
                <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />            
                <link rel="stylesheet" href="css/styles.css?v=1.0">          
            </head>
            <body>
                <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
                    </div>
                    <div class="container" style="margin-left: 20px;margin-right: 20px;">
                    <h3>You've got a new website submission from "${name}", their email is: ✉️${email} </h3>
                    <div style="font-size: 16px;">
                    <p>Submission type: <em>${category}</em> category</p>
                    <p>Url: ${url}</p>
                    <br>
                    </div>
                </div>
            </body>
        </html>
        `,
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error: string, info: { accepted: string; }) => {
            if (error) {
                console.error(error)
                return reject("Unable to send email");
            }

            const message = `Message sent: ${info.accepted}`;
            console.error(message);
            return resolve({message});
        })
    })
}