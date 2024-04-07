import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Textarea,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";
import { STFormTextAreaProps } from "./props";

/**
 * This is a form field utilising both Chakra UI form component and Formik Field / useField.
 * Essentially Chakra UI Form components make the form looks nice while the Formik stuff
 * is used to integrate the field into the Form component.
 *
 * This is specifically the Form Field for a Text Area (Big area for multiple lines).
 *
 * @param {STFormTextAreaProps} props The properties for the component. Mainly consisting of the metadata for the text area and any styling.
 * @returns {React.ReactNode} The Component of a customized form field.
 */
export const STFormTextArea: React.FC<STFormTextAreaProps> = (props: STFormTextAreaProps): React.ReactNode => {
    const { label, placeholder, ...textAreaProps } = props;
    const [field, meta] = useField(props);

    return (
        <FormControl
            w="100%"
            isInvalid={meta.touched && meta.error ? true : false}
        >
            <FormLabel>{label}</FormLabel>
            <Textarea
                resize={"none"}
                size="md"
                minH="250px"
                value={field.value}
                placeholder={placeholder}
                onChange={field.onChange}
                id={field.name}
                borderColor={"darkAccent"}
                {...textAreaProps}
            />
            <FormErrorMessage fontSize="sm">{meta.error}</FormErrorMessage>
        </FormControl>
    );
};

export default STFormTextArea;
