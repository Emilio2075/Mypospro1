import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const BASE44_APP_ID = Deno.env.get("BASE44_APP_ID");
const BASE44_API_KEY = Deno.env.get("BASE44_API_KEY");

Deno.serve(async (req) => {
  try {
    const data = await req.json();

    if (!data || !data.email || !data.id) {
      return Response.json(
        { error: "Campi mancanti: email o id entità assente" },
        { status: 400 }
      );
    }

    const testo = `
Richiesta di informazioni:

Nome: ${data.name}
Email: ${data.email}
Telefono: ${data.phone || "Non fornito"}
Azienda: ${data.company || "Non specificata"}
Transato mensile: ${data.monthlyVolume || "Non indicato"}
Messaggio: ${data.message || "Nessun messaggio"}
`;

    await resend.emails.send({
      from: "no-reply@mypospro.org",
      to: "myposproservice@gmail.com",
      subject: `Richiesta Informazioni - ${data.name}`,
      text: testo,
    });

    await fetch(
      `https://app.base44.com/api/apps/${BASE44_APP_ID}/entities/RichiestaPreventivo/${data.id}`,
      {
        method: "PUT",
        headers: {
          "api_key": BASE44_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailSent: true }),
      }
    );

    return Response.json({ success: true });
  } catch (error) {
    console.error("Errore invio email:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});