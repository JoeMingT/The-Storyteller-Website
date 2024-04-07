import {
    STButton,
    STFormTextArea,
    STFormTextField,
    STHeading,
    STText,
} from "@StorytellerComponents/atoms";
import { Box, Container, VStack, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { contactUsFormIntialValue } from "./contactUsFormInitialValue";
import { contactUsFormValidation } from "./contactUsFormValidation";

import { useCheckWindowSize } from "@Storyteller/hooks";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

/**
 * Easily one of the more complicated components. This is the Form used in the Contact
 * Us Page. After the user filled in the form, it will automatically send whatever is written
 * in the form to the Studio's and the user's email.
 *
 * @returns {React.ReactNode} The Component containing the Form that the user should fill in.
 */
const ContactUsForm: React.FC<any> = (): React.ReactNode => {
    // Use to set the "loading" props for the button
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // The session token of the Captcha
    const [token, setToken] = useState<string>("");
    // If user sent a message, prevent them from spamming
    const [isMessageSent, setIsMessageSent] = useState<boolean>(false);
    // Whether the user passed the captcha or not
    const [isVerified, setIsVerified] = useState<boolean>(false);

    // Toast Menu
    const toast = useToast();
    // To obtain window size for responsive styling for the captcha box
    const windowSize = useCheckWindowSize();

    // When the captcha has been successfully verified / failed to verify
    const onCaptchaChange = async (token: string | null): Promise<any> => {
        if (token) {
            setToken(token);
            setIsVerified(true);
        } else {
            toast({
                title: "CAPTCHA has Failed to Verify.",
                description: `CAPTCHA has failed to verify. Please refresh the page and try again.`,
                status: "error",
                position: "bottom-right",
                isClosable: true,
                duration: 7500,
            });
        }
    };

    return (
        <Container
            boxShadow={"0px 8px 20px rgba(158, 158, 158, 0.50)"}
            backgroundColor="secondary"
            w="100%"
            p={["2.5rem", "2.5rem", "5rem", "3rem", "5rem"]}
            borderRadius={"2.5rem"}
        >
            <VStack
                alignItems={"center"}
                justifyContent="center"
                gap={["2rem", "2rem", "2.5rem", "2rem", "2.5rem"]}
                color="black"
            >
                <Box textAlign={"center"}>
                    <STHeading>Contact Us</STHeading>
                    <STText color="darkAccent">
                        We will get back to you soon!
                    </STText>
                </Box>
                <Formik
                    // Initial values for all the field
                    initialValues={contactUsFormIntialValue}
                    // The yup scheme for checking whether the inputs are valid or not
                    validationSchema={contactUsFormValidation}
                    enableReinitialize
                    validateOnBlur
                    // When submitting the form.
                    onSubmit={(data: any) => {
                        // Change Button to loading
                        setIsLoading(true);
                        // Send email through emailJS
                        emailjs
                            .send(
                                process.env.NEXT_PUBLIC_EMAILJS_SERVICEID ?? "",
                                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID ??
                                    "",
                                {
                                    ...data,
                                    "g-recaptcha-response": token,
                                },
                                {
                                    publicKey:
                                        process.env
                                            .NEXT_PUBLIC_EMAILJS_PUBLICID ?? "",
                                }
                            )
                            // If success...
                            .then(() => {
                                setIsMessageSent(true);
                                toast({
                                    title: "Email Has Been Sent!",
                                    description:
                                        "Thank you very much for reaching out to us! We will get back to you soon!",
                                    status: "success",
                                    position: "bottom-right",
                                    isClosable: true,
                                    duration: 7500,
                                });
                            })
                            // If failure...
                            .catch((err: any) => {
                                toast({
                                    title: "Email Has Failed to Sent!",
                                    description: `There seems to be some problem with sending the email! The error is shown below: \n${err.text}`,
                                    status: "error",
                                    position: "bottom-right",
                                    isClosable: true,
                                    duration: 7500,
                                });
                            })
                            // Regardless of success or failure, remove the loading thing.
                            .finally(() => {
                                setIsLoading(false);
                            });
                    }}
                >
                    {
                        // The form fields
                        (props) => {
                            return (
                                <Form
                                    style={{
                                        width: "100%",
                                    }}
                                    onBlur={props.handleBlur}
                                >
                                    <VStack alignItems="flex-start">
                                        <STFormTextField
                                            name="name"
                                            label="Name (Required)"
                                            type="text"
                                            placeholder="Your Name"
                                        />
                                        <STFormTextField
                                            name="email"
                                            label="Email (Required)"
                                            type="email"
                                            placeholder="Your Email"
                                        />
                                        <STFormTextField
                                            name="phoneNo"
                                            label="Phone No. (Required)"
                                            type="tel"
                                            placeholder="Your WhatsApp Phone No."
                                        />
                                        <STFormTextArea
                                            name="message"
                                            label="Message (Required)"
                                            type="message"
                                            placeholder="Your Message to us!"
                                        />
                                        <ReCAPTCHA
                                            key={
                                                windowSize.width <= 480
                                                    ? "compact-recaptcha"
                                                    : "normal-recaptcha"
                                            }
                                            sitekey={
                                                process.env
                                                    .NEXT_PUBLIC_RECAPTCHA_SITE_KEY ??
                                                ""
                                            }
                                            size={
                                                windowSize.width <= 480
                                                    ? "compact"
                                                    : "normal"
                                            }
                                            onChange={onCaptchaChange}
                                            onExpired={() => {
                                                setIsVerified(false);
                                                setIsMessageSent(false);
                                            }}
                                            onError={() => {
                                                setIsVerified(false);
                                            }}
                                        />
                                        <STButton
                                            mt="2.5rem"
                                            type="submit"
                                            isLoading={isLoading}
                                            px="2.5rem !important"
                                            // Disable it to prevent spamming
                                            isDisabled={
                                                !isVerified || isMessageSent
                                            }
                                        >
                                            Submit
                                        </STButton>
                                    </VStack>
                                </Form>
                            );
                        }
                    }
                </Formik>
            </VStack>
        </Container>
    );
};

export default ContactUsForm;
