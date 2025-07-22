import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  institucion: string;
  cargo: string;
  interes: string;
  mensaje: string;
  "g-recaptcha-response": string;
}

async function sendEmail(data: ContactFormData) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  await transporter.sendMail({
    from: `"Formulario Web" <${process.env.SMTP_USER}>`,
    to: process.env.TO_ADMIN_EMAIL,
    subject: "📩 Nuevo mensaje del formulario de contacto",
    html: `
      <h2>Nuevo mensaje de ${data.nombre} ${data.apellido}</h2>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Teléfono:</strong> ${data.telefono}</p>
      <p><strong>Institución:</strong> ${data.institucion}</p>
      <p><strong>Cargo:</strong> ${data.cargo}</p>
      <p><strong>Interés:</strong> ${data.interes}</p>
      <p><strong>Mensaje:</strong><br/>${data.mensaje}</p>
    `,
  });
}

export async function POST(req: Request) {
  const body: ContactFormData = await req.json();
  const token = body["g-recaptcha-response"];

  if (!token) {
    return NextResponse.json(
      { error: "Falta el token reCAPTCHA" },
      { status: 400 }
    );
  }

  try {
    const secret = process.env.RECAPTCHA_SECRET!;
    const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    });

    const data = await res.json();

    if (!data.success) {
      return NextResponse.json(
        { error: "reCAPTCHA no válido" },
        { status: 400 }
      );
    }

    await sendEmail(body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error en verificación reCAPTCHA:", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}
