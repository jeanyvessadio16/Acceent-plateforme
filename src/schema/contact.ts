import z from "zod";

export const contactSchema = z.object({
  nom_complet: z
    .string()
    .min(2, "Entrez un nom complet valide")
    .max(100, "Le nombre de caractères doit être inférieur ou égal à 100")
    .trim(),
  email: z.email("Email invalid").min(12, "Au minimum 12 caractères").trim(),
  phone: z
    .string()
    .min(9, "Le numéro de téléphone doit contenir au moins 9 chiffres")
    .max(15, "Le numéro de téléphone ne doit pas dépasser 15 chiffres")
    .regex(/^\d+$/, "Le numéro de téléphone ne doit contenir que des chiffres")
    .trim(),
  sujet: z
    .string()
    .min(10, "Le sujet est court")
    .max(50, "Le sujet ne doit pax dépasser 50 caractères")
    .trim(),
  message: z
    .string()
    .min(25, "Le message est trop court")
    .max(500, "Votre message est long")
    .trim(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
