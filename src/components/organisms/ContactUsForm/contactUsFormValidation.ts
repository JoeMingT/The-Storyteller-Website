import * as yup from "yup";

export const contactUsFormValidation = yup.object({
    name: yup.string().required("Name is a required field."),
    email: yup.string().email().required("Email is a required field."),
    message: yup.string().required("Message is a required field"),
});
