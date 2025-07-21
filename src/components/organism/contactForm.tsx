'use client';

import React, { useState } from "react";
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

    const token = (window as any).grecaptcha?.getResponse();

    if (!token) {
      alert("Por favor, completa el reCAPTCHA");
      return;
    }

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
      alert("Formulario enviado ✅");
      
    } else {
      alert(`Error: ${result.error}`);
    }

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
    
    (window as any).grecaptcha?.reset();
  };


  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">
          Envíenos un Mensaje
        </h2>
        {/* Campos de Nombre y Apellido */}
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

        {/* Campos de Correo y Teléfono */}
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

        {/* Campos de Institución y Cargo */}
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

        {/* Campo de Interés Principal */}
        <RadioGroup
          name="interes"
          label="Interés Principal"
          options={interesesOpciones}
          selectedValue={formData.interes}
          onChange={handleRadioChange}
        />

        {/* Campo de Mensaje */}
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
        <div className="g-recaptcha" data-sitekey="6Ld_2YYrAAAAADCNaewT-M7O_TetUpXWDW1dJcRl"></div>
        <button
              type="submit"
              className="w-full py-3 rounded-md text-white font-bold text-lg transition-colors"
              style={{ background: "#F57F26" }}
            >
              Enviar Mensaje
            </button>
      </form>
    </div>
  );
};

export default ContactForm;
