import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";
import { STFormTextFieldProps } from "./props";

export const STFormTextField: React.FC<STFormTextFieldProps> = (props) => {
    const { name, label, placeholder, ...rest } = props;

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
                {...rest}
            />
            <FormErrorMessage fontSize="sm">{meta.error}</FormErrorMessage>
        </FormControl>
    );
};

export default STFormTextField;
