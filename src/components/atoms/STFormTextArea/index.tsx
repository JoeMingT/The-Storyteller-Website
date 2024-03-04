import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Textarea,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

export const STFormTextArea: React.FC<any> = (props) => {
    const { label, placeholder } = props;
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
            />
            <FormErrorMessage fontSize="sm">{meta.error}</FormErrorMessage>
        </FormControl>
    );
};

export default STFormTextArea;
