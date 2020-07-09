import { object, string, boolean } from 'yup';

export const registro_schema = object({
  registro_nombre: string().required(),
  registro_email: string().email().required(),
  registro_patente: string().required(),
  registro_condiciones: boolean().oneOf([true]).required(),
});
export const notificar_schema = object({
  notificar_patente: string().required(),
  notificar_mensaje: string().required(),
  notificar_email: string().email().required(),
});

export const contacto_schema = object({
  contacto_nombre: string().required(),
  contacto_email: string().email().required(),
  contacto_asunto: string().required(),
  contacto_mensaje: string().required(),
  contacto_recaptcha: boolean().required(),
});
