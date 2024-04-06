import { TextareaProps } from "@chakra-ui/react";

export interface STFormTextAreaProps extends TextareaProps {
	name: string;
	label: string;
	type: string;
	placeholder: string;
	// Conflict with types for TextareaProps, overridden
	color?: string;
}
