"use client";

import type React from "react";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@shadcn/ui/dialog";
import { Input } from "@shadcn/ui/input";
import { Label } from "@shadcn/ui/label";
import { Textarea } from "@shadcn/ui/textarea";
import { useCreateNews } from "@/hooks/useCreateNews";
import { NewsFirebase } from "@/app/types";
import { toast } from "sonner";

export default function ButtonAddNews() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<NewsFirebase>({
    title: "",
    description: "",
    image: "",
  });
  const [errors, setErrors] = useState<Partial<NewsFirebase>>({});
  const {
    createNews,
    loading: isSubmitting,
    error: submitError,
  } = useCreateNews();

  const validateForm = (): boolean => {
    const newErrors: Partial<NewsFirebase> = {};

    if (!formData.title.trim()) {
      newErrors.title = "El título es obligatorio";
    }

    if (!formData.description.trim()) {
      newErrors.description = "La descripción es obligatoria";
    }

    if (!formData.image.trim()) {
      newErrors.image = "La URL de la imagen es obligatoria";
    } else {
      //Validate URL
      try {
        new URL(formData.image);
      } catch {
        newErrors.image = "Ingresa una URL válida";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await createNews(formData);
      setFormData({ title: "", description: "", image: "" });
      setErrors({});
      setOpen(false);
    } catch {
      toast.error("Error al crear la noticias");
    }
  };

  const handleInputChange = (field: keyof NewsFirebase, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleCancel = () => {
    setFormData({ title: "", description: "", image: "" });
    setErrors({});
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 h-12 text-black bg-blue-200 hover:bg-blue-950 hover:text-white">
          <Plus className="h-4 w-4" />
          Agregar Noticia
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white text-[#423f3d]">
        <DialogHeader>
          <DialogTitle className="text-black">
            Agregar Nueva Noticia
          </DialogTitle>
          <DialogDescription>
            Completa todos los campos para crear una nueva noticia.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">
              Título <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              placeholder="Ingresa el título de la noticia"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              className={errors.title ? "border-red-500" : ""}
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">
              Descripción <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="description"
              placeholder="Escribe la descripción de la noticia"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className={`min-h-[100px] ${
                errors.description ? "border-red-500" : ""
              }`}
            />
            {errors.description && (
              <p className="text-sm text-red-500">{errors.description}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">
              URL de la Imagen <span className="text-red-500">*</span>
            </Label>
            <Input
              id="image"
              type="url"
              placeholder="https://ejemplo.com/imagen.jpg"
              value={formData.image}
              onChange={(e) => handleInputChange("image", e.target.value)}
              className={errors.image ? "border-red-500" : ""}
            />
            {errors.image && (
              <p className="text-sm text-red-500">{errors.image}</p>
            )}
          </div>

          {submitError && <p className="text-sm text-red-500">{submitError}</p>}

          <DialogFooter className="gap-2">
            <Button
              type="button"
              onClick={handleCancel}
              disabled={isSubmitting}
              className=" border-2 border-black"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className=" text-white bg-black hover:bg-black/80"
            >
              {isSubmitting ? "Creando..." : "Crear Noticia"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
