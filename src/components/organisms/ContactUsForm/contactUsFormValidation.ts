import * as yup from "yup";

const phoneNoRegex = /^(\+?6?01)[0-46-9](-?)*[0-9]{7,8}$/;

export const contactUsFormValidation = yup.object({
    name: yup.string().required("Name is a required field."),
    email: yup.string().email().required("Email is a required field."),
    phoneNo: yup
        .string()
        .required("Phone No. is a required field.")
        .matches(
            phoneNoRegex,
            "Phone number is not valid. Please make sure there are no spaces in your phone number."
        ),
    message: yup.string().required("Message is a required field."),
});
