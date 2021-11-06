import * as yup from "yup";

export function getValidationErrors(err) {
  const validationErrors = {};
  err.inner.forEach((error) => {
    if (error.path) validationErrors[error.path] = error.message;
  });
  return validationErrors;
}

export const userSchemaRegister = yup.object().shape({
  name: yup
    .string()
    .required("O nome não pode estar vazio")
    .min(6, "O campo nome deve conter no mínimo 6 caracteres"),
  cpf: yup
    .string()
    .required("O campo CPF não pode estar vazio")
    .matches(
      /^\d{3}.\d{3}.\d{3}-\d{2}$/,
      "O campo CPF deve estar no modelo XXX.XXX.XXX-XX"
    ),
  telefone: yup
    .string()
    .required("O campo celular não pode estar vazio")
    .matches(
      /^\(\d{2}\)\s*\d{5}\s*-\s*\d{4}$/,
      "O campo celular deve estar no modelo (XX) XXXXX-XXXX"
    ),
  email: yup
    .string()
    .required("O Campo email não pode estar vazio")
    .email("Digite um email válido!"),
});
export const userSchemaRegisterFull = yup.object().shape({
  name: yup
    .string()
    .required("O nome não pode estar vazio")
    .min(6, "O campo nome deve conter no mínimo 6 caracteres"),
  cpf: yup
    .string()
    .required("O campo CPF não pode estar vazio")
    .matches(
      /^\d{3}.\d{3}.\d{3}-\d{2}$/,
      "O campo CPF deve estar no modelo XXX.XXX.XXX-XX"
    ),
  telefone: yup
    .string()
    .required("O campo celular não pode estar vazio")
    .matches(
      /^\(\d{2}\)\s*\d{5}\s*-\s*\d{4}$/,
      "O campo celular deve estar no modelo (XX) XXXXX-XXXX"
    ),
  email: yup
    .string()
    .required("O Campo email não pode estar vazio")
    .email("Digite um email válido!"),
  nomeResp: yup
    .string()
    .min(6, "O campo nome deve conter no mínimo 6 caracteres"),
  cpfResp: yup
    .string()
    .matches(
      /^\d{3}.\d{3}.\d{3}-\d{2}$/,
      "O campo CPF deve estar no modelo XXX.XXX.XXX-XX"
    ),
});
