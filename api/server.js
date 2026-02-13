import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "info@mypospro.org", // deve essere dominio verificato su Resend
      to: "santoro.emilio75@gmail.com",
      subject: "Nuova richiesta dal sito",
      html: `
        <h3>Nuovo contatto</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Messaggio:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
