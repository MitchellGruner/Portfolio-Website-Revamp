import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Text,
    Textarea,
    useToast,
  } from "@chakra-ui/react";
  import {useState} from "react";
  import {sendContactForm} from "../lib/api";
  
  const initValues = {
    subject: "",
    name: "",
    email: "",
    organization: "",
    message: ""
  };
  
  const initState = {
    isLoading: false,
    error: "",
    values: initValues
  };
  
  export default function Home() {
    const toast = useToast();
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});
  
    const {
      values,
      isLoading,
      error
    } = state;
  
    const onBlur = ({ target }) =>
      setTouched((prev) => ({ ...prev, [target.name]: true }));
  
    const handleChange = ({ target }) =>
      setState((prev) => ({
        ...prev,
        values: {
          ...prev.values,
          [target.name]: target.value,
        },
      }));
  
    const onSubmit = async () => {
      setState((prev) => ({
        ...prev,
        isLoading: true,
      }));
      try {
        await sendContactForm(values);
        setTouched({});
        setState(initState);
        toast({
          title: "Message Sent!",
          status: "success",
          duration: 2000,
          position: "top",
        });
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: error.message,
        }));
      }
    };
  
    return (
      <div id="contact" className="h-auto mt-2 md:mt-2 mb-6">
        <div className="text-center">
            <h2 className="text-3xl xs:text-4xl md:text-5xl 2xl:text-6xl font-bold text-white">Let's Get <span className="text-gold font-extrabold">Connected</span>...</h2>
            <p className="p-4 mb-6 xs:mb-10 2xl:mt-6 2xl:mb-14 xs:text-lg md:text-xl 2xl:text-2xl text-white">I am always looking for the next greatest opportunity to bring my web development and design skills to the next level. Whether you have a question or just want to say 'hi', my inbox is always open. Like what you see? Reach out to me today and let's do this!</p>
        </div>
        {error && (
          <Text color="red.300" my={4} fontSize="xl">
            {error}
          </Text>
        )}

        <div className="contact-form">
          <FormControl
            mb={5}
            isRequired
            isInvalid={touched.subject && !values.subject}
          >
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              name="subject"
              className="contact-form-input"
              errorBorderColor="red.300"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
    
          <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
            <FormLabel>Full Name</FormLabel>
            <Input
              type="text"
              name="name"
              className="contact-form-input"
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
    
          <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              className="contact-form-input"
              errorBorderColor="red.300"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={touched.organization && !values.organization} mb={5}>
            <FormLabel>Organization</FormLabel>
            <Input
              type="text"
              name="organization"
              className="contact-form-input"
              errorBorderColor="red.300"
              value={values.organization}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
    
          <FormControl
            isRequired
            isInvalid={touched.message && !values.message}
            mb={5}
          >
            <FormLabel>Message</FormLabel>
            <Textarea
              type="text"
              name="message"
              className="contact-form-input"
              rows={4}
              errorBorderColor="red.300"
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
    
          <a
            className="flex justify-center items-center text-white bg-red rounded-full w-20 sm:w-24 p-3 mr-3 sm:mr-4 text-sm sm:text-md 2xl:text-lg"
            variant="outline"
            colorScheme="blue"
            isLoading={isLoading}
            disabled={
              !values.subject || !values.name || !values.email || !values.organization || !values.message
            }
            onClick={onSubmit}
          >
            Submit!
          </a>
        </div>
      </div>
    );
  }