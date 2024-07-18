export const formFields = [
  {
    type: "text",
    name: "fullName",
    label: "fullNameLabel",
    placeholder: "fullNamePlaceholder",
    required: true,
  },
  {
    type: "email",
    name: "email",
    label: "emailLabel",
    placeholder: "emailPlaceholder",
    required: true,
  },
  {
    type: "tel",
    name: "phone",
    label: "phoneLabel",
    placeholder: "phonePlaceholder",
    required: false,
  },
  {
    type: "text",
    name: "address",
    label: "addressLabel",
    placeholder: "addressPlaceholder",
    required: true,
  },
  {
    type: "text",
    name: "companyName",
    label: "companyNameLabel",
    placeholder: "companyNamePlaceholder",
    required: false,
  },
  {
    type: "textarea",
    name: "message",
    label: "messageLabel",
    placeholder: "messagePlaceholder",
    required: true,
  },
];

export const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  companyName: "",
  message: "",
};
