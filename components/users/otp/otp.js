import React, { useState, useEffect, useRef } from "react";
import { auth } from '../../../utils/services/firebase'
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { Formik, Field } from "formik";
import { OTPSchema, OTPVerifySchema } from "../../../hooks";
import {
    Button,
    InputGroup,
    Input,
    InputRightElement,
    useColorMode,
    useColorModeValue,
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    VStack,
    Spinner,
    Flex
} from '@chakra-ui/react'
export function OTP() {
    /* A react hook. It is used to store the value of the input field. */
    const [resetMobile, setResetMobile] = useState('');
    const [appVerifier, setAppVerifier] = useState(null);

    const INITIAL_COUNT = 59;
    const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
    const secondsToDisplay = secondsRemaining % 60;
    const [show, setShow] = useState(false)
    const [send, setSend] = useState(false)


    const configCaptcha = () => {
        try {
            window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
                'size': 'invisible',
                'callback': (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    onSendOtp();
                },
                defaultCountry: "PH"
            }, auth);
        } catch (error) {
            console.log(error)
        }
    }

    const onSendOtp = ({ mobile }) => {
        const regexMobile = /([0]\d{3}\s?\d{3}\s?\d{4})/;
        let mobileNumber = "";
        if (regexMobile.test(mobile)) {
            mobileNumber = mobile.replace(/0/, '+63');
        } else {
            mobileNumber = mobile;
        }
        setResetMobile(mobileNumber);
        signInWithPhoneNumber(auth, mobileNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log("send success")
                handleStart();
                setShow(true);
                setSend(true);
                // ...
            }).catch((error) => {
                console.log(error)
                // Error; SMS not sent
            });
    }

    const onResendOtp = (e) => {
        e.preventDefault();

        if (resetMobile === "") {
            alert("Empty");
        } else {
            handleStart();
            alert(resetMobile);
            signInWithPhoneNumber(auth, resetMobile, appVerifier)
                .then((confirmationResult) => {
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    window.confirmationResult = confirmationResult;
                    console.log("send success")
                    // ...
                }).catch((error) => {
                    console.log(error)
                    // Error; SMS not sent
                });
        }
    }

    const onVerifyOTP = ({ code }) => {

        confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(user.accessToken);
        }).catch((error) => {
            console.log(error);
            // User couldn't sign in (bad verification code?)
        });
    }

    const handleStart = () => {
        setStatus(STATUS.STARTED);
        setSecondsRemaining(INITIAL_COUNT);
    }

    const STATUS = {
        STOPPED: <Button size='sm' borderRadius={3} mt={5} variant={'ghost'} color={'gray.500'} w={['100%']} bg={"gray.200"} _hover={{
            bg: 'gray.400',
            color: 'white'
        }} _focus={{ bg: 'gray.400', color: 'white' }} type="submit">Resend </Button>
    }

    const [status, setStatus] = useState(STATUS.STOPPED);
    useInterval(
        () => {
            if (secondsRemaining > 0) {
                setSecondsRemaining(secondsRemaining - 1);

            } else {
                setStatus(STATUS.STOPPED);
            }
        },
        status === STATUS.STARTED ? 1000 : null
        // passing null stops the interval
    );

    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    /* Calling the configCaptcha function and setting the appVerifier state. */
    useEffect(() => {
        setAppVerifier(window.recaptchaVerifier);
        configCaptcha();
    }, []);

    return (
        <Box w={'100%'}>
            <Formik
                initialValues={{
                    mobile: "",
                }}
                validationSchema={OTPSchema}
                onSubmit={(values) => {
                    onSendOtp(values);
                }}
            >
                {({ handleSubmit, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                        <VStack spacing={4} align="flex-start">

                            <FormControl isInvalid={!!errors.mobile && touched.mobile}>
                                <div id='recaptcha' display={"none"}></div>
                                <FormLabel htmlFor="mobile">Phone Number*</FormLabel>
                                <InputGroup
                                    w={['100%']}
                                    bg={useColorModeValue("gray.100", "gray.900")}
                                    size='md'
                                >
                                    <Field
                                        as={Input}
                                        id="mobile"
                                        name="mobile"
                                        type="text"
                                        variant="filled"
                                        borderRadius={0}
                                        placeholder={"Please enter your phone number"}
                                        bg={useColorModeValue("white.100", "gray.800")}
                                        border='1px'

                                        borderColor='gray.200'
                                        _focus={{
                                            border: '1px solid gray',
                                            bg: useColorModeValue("white", "gray.800")
                                        }}
                                        _hover={{
                                            bg: useColorModeValue("white", "gray.800")
                                        }}
                                    />
                                    {send ? (
                                        <InputRightElement w='5.6rem'>
                                            <Button
                                                size='sm'
                                                borderRadius={3}
                                                variant={'ghost'}
                                                bg={"teal.500"}
                                                color={'white'}
                                                type="button"
                                                px={2}
                                                disabled
                                                _hover={{
                                                    bg: "teal.400"
                                                }}
                                            >
                                                <Flex flexDir={'row-reverse'} justifyItems={'flex-end'} alignItems={'center'}> SMS Code  </Flex>
                                            </Button>
                                        </InputRightElement>
                                    ) : (
                                        <InputRightElement w='6.2rem'>
                                            <Button
                                                size='sm'
                                                borderRadius={3}
                                                variant={'ghost'}
                                                bg={"teal.500"}
                                                color={'white'}
                                                type="submit"
                                                _hover={{
                                                    bg: "teal.400"
                                                }}
                                            >
                                                SMS Code
                                            </Button>
                                        </InputRightElement>
                                    )}
                                </InputGroup>

                                <FormErrorMessage>{errors.mobile}</FormErrorMessage>
                            </FormControl>


                        </VStack>
                    </form>
                )}
            </Formik>

            <Box style={{ display: show ? 'block' : 'none' }}>
                <Box mt={5}>
                    <Formik
                        initialValues={{
                            code: "",
                        }}
                        validationSchema={OTPVerifySchema}
                        onSubmit={(values) => {
                            onVerifyOTP(values);
                        }}
                    >
                        {({ handleSubmit, errors, touched }) => (
                            <form onSubmit={handleSubmit}>
                                <VStack spacing={3} align="flex-start">
                                    <FormControl isInvalid={!!errors.code && touched.code}>
                                        <div id='recaptcha' display={"none"}></div>
                                        <FormLabel htmlFor="code">SMS Verification Code*</FormLabel>
                                        <InputGroup
                                            w={['100%']}
                                            bg={useColorModeValue("gray.100", "gray.900")}
                                            size='md'
                                        >
                                            <Field
                                                as={Input}
                                                id="code"
                                                name="code"
                                                type="number"
                                                variant="filled"
                                                placeholder={"6 digits"}
                                                borderRadius={0}
                                                bg={useColorModeValue("white.100", "gray.800")}
                                                border='1px'
                                                borderColor='gray.200'
                                                _focus={{
                                                    border: '1px solid gray',
                                                    bg: useColorModeValue("white", "gray.800")
                                                }}
                                                _hover={{
                                                    bg: useColorModeValue("white", "gray.800")
                                                }}
                                                validate={(value) => {
                                                    let error;

                                                    if (value.length === 0) {
                                                        error = "Verification code is required.";

                                                    } else if (value.length >= 6) {
                                                        error = "Verification code is only 6 digits.";
                                                        console.log("true")
                                                    }


                                                    return error;
                                                }}
                                            />
                                            <InputRightElement w='4.5rem'>
                                                <Button
                                                    size='sm'
                                                    borderRadius={3}
                                                    variant={'ghost'}
                                                    bg={"gray.500"}
                                                    color={'white'}
                                                    type="submit"
                                                    _hover={{
                                                        bg: "gray.400"
                                                    }}
                                                >
                                                    Verify
                                                </Button>

                                            </InputRightElement>

                                        </InputGroup>

                                        <FormErrorMessage>{errors.code}</FormErrorMessage>
                                    </FormControl>
                                </VStack>
                            </form>
                        )}
                    </Formik>

                    <form onSubmit={onResendOtp}>
                        {status == STATUS.STARTED ?
                            <Button size='sm' borderRadius={3} mt={5} variant={'ghost'} color={'white'} w={['100%']} bg={"gray.500"} _hover={{
                                bg: 'gray.500',
                            }} _focus={{ bg: 'gray.500' }} disabled>Resend ({secondsToDisplay}) </Button>
                            :
                            status
                        }
                    </form>

                </Box>
            </Box>

        </Box>
    )
}