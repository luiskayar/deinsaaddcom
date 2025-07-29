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
  // Verificar que todas las variables de entorno estén configuradas
  const requiredEnvVars = {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    TO_ADMIN_EMAIL: process.env.TO_ADMIN_EMAIL,
  };

  const missingVars = Object.entries(requiredEnvVars)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    throw new Error(`Variables de entorno faltantes: ${missingVars.join(", ")}`);
  }

  // Configuración flexible del transportador SMTP
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const smtpConfig: any = {
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  };

  // Configurar seguridad según el proveedor
  const smtpPort = Number(process.env.SMTP_PORT);
  const smtpHost = process.env.SMTP_HOST!.toLowerCase();

  // Configuraciones específicas por proveedor
  if (smtpHost.includes('office365.com') || smtpHost.includes('outlook.com')) {
    // Microsoft 365 / Office 365
    smtpConfig.secure = false; // STARTTLS
    smtpConfig.requireTLS = true;
  } else if (smtpHost.includes('gmail.com')) {
    // Gmail / Google Workspace
    smtpConfig.secure = smtpPort === 465; // true para 465, false para 587
  } else if (smtpPort === 465) {
    // Puerto 465 = SSL
    smtpConfig.secure = true;
  } else if (smtpPort === 587) {
    // Puerto 587 = STARTTLS
    smtpConfig.secure = false;
    smtpConfig.requireTLS = true;
  } else {
    // Configuración por defecto
    smtpConfig.secure = false;
  }

  const transporter = nodemailer.createTransport(smtpConfig);

  // Verificar la conexión
  try {
    await transporter.verify();
    console.log('✅ Conexión SMTP verificada correctamente');
  } catch (error) {
    console.error('❌ Error al verificar conexión SMTP:', error);
    throw new Error(`Error de conexión SMTP: ${error instanceof Error ? error.message : 'Error desconocido'}`);
  }

  const mailOptions = {
    from: `"Formulario Web DEINSA" <${process.env.SMTP_USER}>`,
    to: process.env.TO_ADMIN_EMAIL,
    replyTo: data.email, // Para que las respuestas vayan al remitente
    subject: `Solicitud de Demo para DELPHOS - ${data.nombre} ${data.apellido}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
        <div style="background-color: white; border-radius: 10px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1e40af; margin: 0; font-size: 24px;">Nuevo mensaje del formulario de contacto</h1>
            <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px;">deinsa.com</p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 25px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1e40af;">
            <h3 style="color: #374151; margin-top: 0; margin-bottom: 20px; font-size: 18px;">📋 Información del remitente</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <div>
                <p style="margin: 8px 0;"><strong style="color: #374151;">Nombre:</strong><br><span style="color: #1f2937;">${data.nombre} ${data.apellido}</span></p>
                <p style="margin: 8px 0;"><strong style="color: #374151;">Email:</strong><br><a href="mailto:${data.email}" style="color: #1e40af; text-decoration: none;">${data.email}</a></p>
                <p style="margin: 8px 0;"><strong style="color: #374151;">Teléfono:</strong><br><span style="color: #1f2937;">${data.telefono || 'No proporcionado'}</span></p>
              </div>
              <div>
                <p style="margin: 8px 0;"><strong style="color: #374151;">Institución/Empresa:</strong><br><span style="color: #1f2937;">${data.institucion || 'No proporcionado'}</span></p>
                <p style="margin: 8px 0;"><strong style="color: #374151;">Cargo:</strong><br><span style="color: #1f2937;">${data.cargo || 'No proporcionado'}</span></p>
                <p style="margin: 8px 0;"><strong style="color: #374151;">Interés principal:</strong><br><span style="color: #1f2937; font-weight: 500;">${data.interes}</span></p>
              </div>
            </div>
          </div>
          
          <div style="background-color: #fef3c7; padding: 25px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
            <h3 style="color: #92400e; margin-top: 0; margin-bottom: 15px; font-size: 18px;">💬 Mensaje</h3>
            <div style="background-color: white; padding: 20px; border-radius: 6px; border: 1px solid #fbbf24;">
              <p style="white-space: pre-wrap; line-height: 1.6; margin: 0; color: #1f2937;">${data.mensaje}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              Este mensaje fue enviado desde el formulario de contacto de <strong>DEINSA GLOBAL</strong><br>
              <a href="https://deinsa.com" style="color: #1e40af; text-decoration: none;">deinsa.com</a>
            </p>
          </div>
        </div>
      </div>
    `,
    text: `
Nuevo mensaje del formulario de contacto de DEINSA GLOBAL
deinsa.com

INFORMACIÓN DEL REMITENTE:
- Nombre: ${data.nombre} ${data.apellido}
- Email: ${data.email}
- Teléfono: ${data.telefono || 'No proporcionado'}
- Institución/Empresa: ${data.institucion || 'No proporcionado'}
- Cargo: ${data.cargo || 'No proporcionado'}
- Interés principal: ${data.interes}

MENSAJE:
${data.mensaje}

---
Este mensaje fue enviado desde el formulario de contacto de DEINSA GLOBAL
deinsa.com
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email enviado correctamente a:', process.env.TO_ADMIN_EMAIL);
  } catch (error) {
    console.error('❌ Error al enviar email:', error);
    throw new Error(`Error al enviar email: ${error instanceof Error ? error.message : 'Error desconocido'}`);
  }
}

export async function POST(req: Request) {
  try {
    const body: ContactFormData = await req.json();
    const token = body["g-recaptcha-response"];

    // Validar campos requeridos
    if (!body.nombre || !body.apellido || !body.email || !body.mensaje) {
      return NextResponse.json(
        { error: "Todos los campos obligatorios deben estar completos" },
        { status: 400 }
      );
    }

    if (!token) {
      return NextResponse.json(
        { error: "Falta el token reCAPTCHA" },
        { status: 400 }
      );
    }

    // Verificar reCAPTCHA
    const secret = process.env.RECAPTCHA_SECRET;
    if (!secret) {
      console.error("RECAPTCHA_SECRET no está configurado");
      return NextResponse.json(
        { error: "Error de configuración del servidor" },
        { status: 500 }
      );
    }

    const recaptchaRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    });

    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
      console.error("reCAPTCHA verification failed:", recaptchaData);
      return NextResponse.json(
        { error: "Verificación reCAPTCHA fallida" },
        { status: 400 }
      );
    }

    // Enviar email
    await sendEmail(body);

    return NextResponse.json({ 
      success: true,
      message: "Mensaje enviado correctamente" 
    });

  } catch (error) {
    console.error("Error en el endpoint de contacto:", error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
