import {
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

import Image from "next/image";
import ContactImage from "../../public/static/images/profilelookingdown.png";

import {BsPhone} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import {BsBuilding} from "react-icons/bs";
  
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

const Contact = () => {
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
    <div id="contact" className="h-auto mt-2 mb-8">
      <div className="text-center">
          <h2 className="text-3xl xs:text-4xl md:text-5xl 2xl:text-6xl font-bold text-white">Let's Get <span className="text-black font-extrabold">Connected</span>...</h2>
          <p className="p-4 mb-6 xs:mb-10 2xl:mt-6 2xl:mb-14 xs:text-lg md:text-xl 2xl:text-2xl text-white">I am always looking for the next greatest opportunity to bring my web development and design skills to the next level. Whether you have a question or just want to say 'hi', my inbox is always open. Like what you see? Reach out to me today and let's do this!</p>
      </div>
      <div id="contact-section"></div>

      <div className="flex flex-col md:flex-row">
        <div className="contact-information-image mt-6 w-2/3 xs:w-7/12 sm:w-2/5 xl:w-96 m-auto">
            <Image src={ContactImage} className="profile-picture rounded-full" alt="Contact Picture of Myself" />
        </div>
        <div className="contact-information-div mt-6 sm:mt-8 mb-12 sm:mb-14 xs:mx-4 sm:mx-10 md:mx-0">
          <div className="flex my-1">
            <span className="text-white text-xl sm:text-2xl mr-2 sm:mr-4"><BsPhone /></span>
            <a href="tel:5309065979" className="text-black font-bold">(530) 906-5979</a>
          </div>
          <div className="flex my-1">
            <span className="text-white text-xl sm:text-2xl mr-2 sm:mr-4"><AiOutlineMail /></span>
            <a href="mailto:mit.gruner@gmail.com" className="text-black font-bold">mit.gruner@gmail.com</a>
          </div>
          <div className="flex my-1">
            <span className="text-white text-xl sm:text-2xl mr-2 sm:mr-4"><BsBuilding /></span>
            <a href="https://www.google.com/maps/place/418+Harding+Industrial+Dr,+Nashville,+TN+37211/@36.0926255,-86.6946444,17z/data=!3m1!4b1!4m6!3m5!1s0x88646ef9f7b938f9:0xdf69b6688eceae4e!8m2!3d36.0926255!4d-86.6920695!16s%2Fg%2F11c1kycp45?entry=ttu" className="text-black font-bold">Electronic Express</a>
          </div>
          <p className="text-white text-sm mt-4 sm:mt-6">Professional Front End Developer with nearly two years of relevant experience. Graduated from California State University, Sacramento with a B.S. in Computer Science in May of 2021. Skilled in React, Next.js, Tailwind, TypeScript, JavaScript, and HTML and CSS.</p>
        </div>
      </div>

      <div className="contact-form">
        {error && (
          <Text my={4} fontSize="xl">
            {error}
          </Text>
        )}
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
            errorBorderColor=""
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
            errorBorderColor=""
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
            errorBorderColor=""
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
            errorBorderColor=""
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
            errorBorderColor=""
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
  
        <a
          className="contact-form-submit flex justify-center items-center text-white font-bold bg-black rounded-full w-20 sm:w-24 p-3 mr-3 sm:mr-4 text-sm sm:text-md 2xl:text-lg"
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

export default Contact;