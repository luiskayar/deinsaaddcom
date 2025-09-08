"use client";

import React, { useState, useEffect } from "react";
// import Script from "next/script"; // eliminado: no se usa
import FormField from "../molecules/formField";
import Input from "../atoms/input";
import Textarea from "../atoms/textArea";
import RadioGroup from "../molecules/radioGroup";

const interesesOpciones = [
  "Solicitar Demo de DELPHOS",
  "Consultoría",
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Honeypot
  const [botTrap, setBotTrap] = useState("");

  // Manejar hidratación
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar mensajes de error cuando el usuario empiece a escribir
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interes: value }));
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const resetForm = () => {
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          company: botTrap,
        }),
      });

      if (res.ok) {
        setSubmitStatus({
          type: 'success',
          message: '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.'
        });
        resetForm();
      } else {
        const errorData = await res.json();
        setSubmitStatus({
          type: 'error',
          message: errorData.error || errorData.message || 'Error al enviar el mensaje. Por favor, intenta de nuevo.'
        });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Error de conexión. Por favor, verifica tu conexión a internet e intenta de nuevo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // No renderizar hasta que esté montado para evitar problemas de hidratación
  if (!isMounted) {
    return (
      <div className="bg-[#181818] p-8 rounded-2xl">
        <div className="space-y-8 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-12 text-center">
            Formulario de Contacto
          </h2>
          <div className="text-center text-gray-400">Cargando formulario...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#181818] p-8 rounded-2xl">
      {/* Formulario simple con honeypot invisible */}
      <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-12 text-center">
          Formulario de Contacto
        </h2>

        {submitStatus.type && (
          <div className={`p-4 rounded-lg text-center ${
            submitStatus.type === 'success'
              ? 'bg-green-900/20 border border-green-500/30 text-green-400' 
              : 'bg-red-900/20 border border-red-500/30 text-red-400'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField htmlFor="nombre" label="Nombre *">
            <Input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </FormField>
          <FormField htmlFor="apellido" label="Apellido *">
            <Input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField htmlFor="email" label="Correo Electrónico *">
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </FormField>
          <FormField htmlFor="telefono" label="Teléfono">
            <Input
              type="text"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField htmlFor="institucion" label="Institución/Empresa">
            <Input
              type="text"
              id="institucion"
              name="institucion"
              value={formData.institucion}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </FormField>
          <FormField htmlFor="cargo" label="Cargo">
            <Input
              type="text"
              id="cargo"
              name="cargo"
              value={formData.cargo}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </FormField>
        </div>

        <div className="space-y-4">
          <RadioGroup
            name="interes"
            label="Servicio *"
            options={interesesOpciones}
            selectedValue={formData.interes}
            onChange={handleRadioChange}
            disabled={isSubmitting}
          />
        </div>

        <FormField htmlFor="mensaje" label="Su Mensaje *">
          <Textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escriba su mensaje aquí..."
            required
            disabled={isSubmitting}
          />
        </FormField>

        {/* Honeypot invisible: bots suelen completarlo */}
        <input
          type="text"
          name="company"
          value={botTrap}
          onChange={(e) => setBotTrap(e.target.value)}
          className="hidden"
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all duration-200 ${
            isSubmitting 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:opacity-90 cursor-pointer transform hover:scale-105'
          }`}
          style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)" }}
        >
          {isSubmitting ? 'Enviando...' : 'ENVIAR MENSAJE'}
        </button>

        <p className="text-sm text-gray-400 text-center">
          * Campos obligatorios
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
