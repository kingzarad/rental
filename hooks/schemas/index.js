import * as yup from "yup";
const phoneNumberRegex = /(\+?\d{2}?\s?\d{3}\s?\d{3}\s?\d{4})|([0]\d{3}\s?\d{3}\s?\d{4})/;
export const OTPSchema = yup.object().shape({
    mobile: yup
        .string()
        .min(9, "Phone number min. must be 11 digits.")
        .max(13, "Phone number max. must be 12 digits.")
        .matches(phoneNumberRegex, { message: "Please enter a valid phone number.. (+63) or (09)" })
        .required("You can't leave this empty"),
});

export const OTPVerifySchema = yup.object().shape({
    code: yup
        .string()
        .max(6, "Verification code is only 6 digits.")
        .required("Verification code is required."),
});