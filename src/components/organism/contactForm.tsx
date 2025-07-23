"use client";

import React, { useState } from "react";
import Script from "next/script";
import FormField from "../molecules/formField";
import Input from "../atoms/input";
import Textarea from "../atoms/textArea";
import RadioGroup from "../molecules/radioGroup";

const interesesOpciones = [
  "Solicitar Demo de DELPHOS",
  "Consulta sobre Licitación",
  "Consultoría GRC",
  "Soporte Técnico",
  "Información General",
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    institucion: "",
    cargo: "",
    interes: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interes: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = window.grecaptcha?.getResponse();

    if (!token) {
      alert("Por favor, completa el reCAPTCHA");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          "g-recaptcha-response": token,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
          institucion: "",
          cargo: "",
          interes: "",
          mensaje: "",
        });
        alert("Formulario enviado ✅");
      } else {
        alert(`Error: ${result.error || "Algo salió mal."}`);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert(
        "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo."
      );
    } finally {
      window.grecaptcha?.reset();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      {/* ✅ Carga automática del script de reCAPTCHA */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />

      <form className="space-y-5" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">
          Envíenos un Mensaje
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField htmlFor="nombre" label="Nombre">
            <Input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField htmlFor="apellido" label="Apellido">
            <Input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField htmlFor="email" label="Correo Electrónico">
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField htmlFor="telefono" label="Teléfono">
            <Input
              type="text"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField htmlFor="institucion" label="Institución/Empresa">
            <Input
              type="text"
              id="institucion"
              name="institucion"
              value={formData.institucion}
              onChange={handleChange}
            />
          </FormField>
          <FormField htmlFor="cargo" label="Cargo">
            <Input
              type="text"
              id="cargo"
              name="cargo"
              value={formData.cargo}
              onChange={handleChange}
            />
          </FormField>
        </div>

        <RadioGroup
          name="interes"
          label="Interés Principal"
          options={interesesOpciones}
          selectedValue={formData.interes}
          onChange={handleRadioChange}
        />

        <FormField htmlFor="mensaje" label="Su Mensaje">
          <Textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escriba su mensaje aquí..."
            required
          />
        </FormField>

        <div
          className="g-recaptcha flex justify-center"
          data-sitekey="6Ld_2YYrAAAAADCNaewT-M7O_TetUpXWDW1dJcRl"
        ></div>

        <button
          type="submit"
          className="w-full py-3 rounded-md text-white font-bold text-lg transition-colors cursor-pointer"
          style={{ background: "#F57F26" }}
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
