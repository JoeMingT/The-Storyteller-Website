import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

/**
 * This is a form field utilising both Chakra UI form component and Formik Field / useField.
 * Essentially Chakra UI Form components make the form looks nice while the Formik stuff
 * is used to integrate the field into the Form component.
 * 
 * This is specifically the Form Field for a Text Input (One line).
 *
 * @returns {React.ReactNode} The Component of a customized form field.
 */
export const STFormTextField: React.FC<any> = (props) => {
    const { label, placeholder } = props;
    const [field, meta] = useField(props);

    return (
        <FormControl
            w="100%"
            isInvalid={meta.touched && meta.error ? true : false}
        >
            <FormLabel>{label}</FormLabel>
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
            />
            <FormErrorMessage fontSize="sm">{meta.error}</FormErrorMessage>
        </FormControl>
    );
};

export default STFormTextField;
