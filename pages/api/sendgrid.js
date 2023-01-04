import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    try {
        await sendgrid.send({
            to: 'arianarajewski@gmail.com',
            from: 'arianadaris@arianadaris.dev',
            subject: `[arianadaris.dev] ${ req.body.subject }`,
            html: `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <div style="">
                        <h3 style="background-color: #A5C3F3;text-align: center;padding: 2em; border-radius: 100px;font-family:'Arial';color:white;text-transform:uppercase;">arianadaris.dev</h3>
                        <p style="font-family:'Arial';padding:1em 2em 0 2em;">${ req.body.subject }</p>
                        <p style="font-family:'Arial';padding:1em 2em 0 2em;">${ req.body.message }</p>
                        <p style="font-family:'Arial';padding:1em 2em 0 2em;">${ req.body.name }</p>
                        <p style="font-family:'Arial';padding:0 2em 2em 2em;color: #A5C3F3;">${ req.body.email }</p>
                    </div>
                </body>
            </html>
            `
        });
    }
    catch (error) {
        return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({error: ""});
}

export default sendEmail;