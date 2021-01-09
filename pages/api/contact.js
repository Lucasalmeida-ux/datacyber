import nodemailer from "nodemailer"

const emailPass = "K25xr4722"

const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com.br",
    port: 587,
    secure: true,
    auth: {
        user: "contato@delamimos.com.br",
        pass: emailPass
    }
})
//[1]

export default async (req, res) => {
    const { senderMail, name, content, recipientMail } = req.body
//[2]

    // Check if fields are all filled
    if (senderMail === "" || name === "" || content === "" || recipientMail === "") {
        res.status(403).send("")
        return
    }
//[3]

    const mailerRes = await mailer({ senderMail, name, text: content, recipientMail })
    res.send(mailerRes)
//[4]
}

const mailer = ({ senderMail, name, text, recipientMail }) => {
    const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`
    const message = {
        from,
        to: `${recipientMail}`,
        subject: `Nova mensagem de ${from}`,
        text,
        replyTo: from
    }
//[5]

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
//[6]
}