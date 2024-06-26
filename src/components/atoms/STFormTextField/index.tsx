import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";
import { STFormTextFieldProps } from "./props";

/**
 * This is a form field utilising both Chakra UI form component and Formik Field / useField.
 * Essentially Chakra UI Form components make the form looks nice while the Formik stuff
 * is used to integrate the field into the Form component.
 * 
 * This is specifically the Form Field for a Text Input (One line).
 *
 * @param {STFormTextFieldProps} props The properties for the Text Field. Mainly containing the metadata and also any styling for the text field if required.
 * @returns {React.ReactNode} The Component of a customized form field.
 */
export const STFormTextField: React.FC<STFormTextFieldProps> = (props: STFormTextFieldProps): React.ReactNode => {
    const { name, label, placeholder, ...inputProps } = props;
    const [field, meta] = useField(name);

    return (
        <FormControl
            w="100%"
            isInvalid={meta.touched && meta.error ? true : false}
        >
            {label ? <FormLabel>{label}</FormLabel> : <></>}
            <Input
                w="100%"
                size="md"
                paddingY="15px"
                paddingLeft="15px"
                placeholder={placeholder}
                value={field.value}
                onChange={field.onChange}
                id={field.name}
                borderColor={"darkAccent"}
                {...inputProps}
            />
            <FormErrorMessage fontSize="sm">{meta.error}</FormErrorMessage>
        </FormControl>
    );
};

export default STFormTextField;
