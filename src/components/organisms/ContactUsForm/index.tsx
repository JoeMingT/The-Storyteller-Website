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

const ContactUsForm: React.FC<any> = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [token, setToken] = useState<string>("");
    const [isMessageSent, setIsMessageSent] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);

    const toast = useToast();
    const windowSize = useCheckWindowSize();

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
                    initialValues={contactUsFormIntialValue}
                    validationSchema={contactUsFormValidation}
                    enableReinitialize
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
                            .then(() => {
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
                            .catch((err) => {
                                toast({
                                    title: "Email Has Failed to Sent!",
                                    description: `There seems to be some problem with sending the email! The error is shown below: \n${err.text}`,
                                    status: "error",
                                    position: "bottom-right",
                                    isClosable: true,
                                    duration: 7500,
                                });
                            })
                            .finally(() => {
                                setIsLoading(false);
                                setIsMessageSent(true);
                            });
                    }}
                >
                    {() => {
                        return (
                            <Form
                                style={{
                                    width: "100%",
                                }}
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
                                        isDisabled={
                                            !isVerified || isMessageSent
                                        }
                                    >
                                        Submit
                                    </STButton>
                                </VStack>
                            </Form>
                        );
                    }}
                </Formik>
            </VStack>
        </Container>
    );
};

export default ContactUsForm;
