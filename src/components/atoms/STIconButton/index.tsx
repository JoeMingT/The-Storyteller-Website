import { STIconButtonProps } from "./props";

import { IconButton, Image } from "@chakra-ui/react";

import { ForwardRefExoticComponent, ForwardedRef, forwardRef } from "react";

/**
 * The basic IconButton component for the application with the base settings.
 * Provided a ForwardRef function to allow Parent components to pass ref into this component
 * ref is used for the Swiper component as custom navigation button
 *
 * @param {STIconButtonProps} props Properties for the component
 * @param {ForwardedRef} ref The Reference passed from parent
 * @returns {React.ReactNode} The Button that only contains an Icon
 */
const STIconButton: ForwardRefExoticComponent<any> = forwardRef<
    HTMLButtonElement,
    STIconButtonProps
>((props, ref) => {
    const { iconHeight, iconWidth, iconSrc, iconAlt, ...iconButtonProps } =
        props;

    return (
        <IconButton
            height={"auto"}
            width="auto"
            background="transparent"
            _hover={{
                background: "transparent",
            }}
            {...iconButtonProps}
            ref={ref}
            icon={
                <Image
                    w={iconWidth ? iconWidth : "50px"}
                    h={iconHeight ? iconHeight : "auto"}
                    alt={`${iconAlt}`}
                    src={`${iconSrc}`}
                />
            }
        />
    );
});
// ESLint Best Practices
// Provide name that will be displayed in error message so we know where error comes from.
STIconButton.displayName = "STIconButton";

export default STIconButton;
