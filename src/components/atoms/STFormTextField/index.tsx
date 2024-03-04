import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

export const STFormTextField: React.FC<any> = (props) => {
    // const { field, form, label, customLabel, type = "text", ...rest } = props;

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
