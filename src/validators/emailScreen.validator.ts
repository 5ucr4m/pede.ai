import * as yup from "yup";

export const emailValidatorSchema = yup.object().shape({
  email: yup
    .string()
    .required("Formato de e-mail inválido")
    .email("Formato de e-mail inválido"),
});
