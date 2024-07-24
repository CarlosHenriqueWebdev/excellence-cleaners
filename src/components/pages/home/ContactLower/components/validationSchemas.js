import * as Yup from "yup";

export const getValidationSchema = (t) => {
  const baseValidationSchema = Yup.object().shape({
    fullName: Yup.string().required(t("requiredField")),
    email: Yup.string().email(t("invalidEmail")).required(t("requiredField")),
    address: Yup.string().required(t("requiredField")),
    message: Yup.string().required(t("requiredField")),
  });

  return baseValidationSchema;
};
