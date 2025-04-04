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
  error: "",
  values: initValues
};

const Contact = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const {
    values,
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
    var fullNameValue = document.getElementById("full-name-value").value;
    var fullNameRegex = /^([\w]{2,})+\s+([\w\s]{2,})+$/i;
    var fullNameResult = fullNameRegex.test(fullNameValue);
  
    var emailValue = document.getElementById("email-value").value;
    var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailResult = emailRegex.test(emailValue);

    setState((prev) => ({
      ...prev,
    }));

    if (fullNameResult && emailResult) {
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
          error: error.message,
        }));
      }
    } else {
      if (!fullNameResult && emailResult) {
        setState((prev) => ({
          ...prev,
          error: "Please make sure the full name field is correct",
        }));
      } else if (fullNameResult && !emailResult) {
        setState((prev) => ({
          ...prev,
          error: "Please make sure the email field is correct",
        }));
      } else {
        setState((prev) => ({
          ...prev,
          error: "Please make sure the full name and email fields are correct",
        }));
      }
    }
  };

  return (
    <div id="contact" className="h-auto mt-2 mb-8">
      <div className="text-center">
          <h2 className="text-3xl xs:text-4xl md:text-5xl 2xl:text-6xl font-bold text-white"><p>Let&apos;s Get Connected...</p></h2>
          <p className="p-4 mb-6 xs:mb-10 2xl:mt-6 2xl:mb-14 xs:text-lg md:text-xl 2xl:text-2xl text-white">I am always on the lookout for the next greatest opportunity to bring my web development and design skills to the next level. Whether you have a question or just want to say &apos;hi&apos;, my inbox is always open. Like what you see? Reach out to me today and let&apos;s do this!</p>
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
            <a href="https://www.google.com/maps/place/HealthStream/@36.1635151,-86.791141,17z/data=!4m15!1m8!3m7!1s0x8864668aac87681b:0xd7d75bd2bfa3c67e!2sHealthStream!8m2!3d36.1637768!4d-86.7912083!10e5!16s%2Fg%2F1tk_kfzl!3m5!1s0x8864668aac87681b:0xd7d75bd2bfa3c67e!8m2!3d36.1637768!4d-86.7912083!16s%2Fg%2F1tk_kfzl?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" className="text-black font-bold">HealthStream</a>
          </div>
          <p className="text-white text-sm mt-4 sm:mt-6">Professional Frontend Developer with three years of relevant experience. Graduated from California State University, Sacramento with a B.S. in Computer Science in May of 2021. Skilled in React.js, Next.js, Tailwind CSS, TypeScript, JavaScript, Sass, and jQuery.</p>
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
          <FormLabel className="text-white">Subject</FormLabel>
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
          <FormLabel className="text-white">Full Name</FormLabel>
          <Input
            id="full-name-value"
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
          <FormLabel className="text-white">Email</FormLabel>
          <Input
            id="email-value"
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
          <FormLabel className="text-white">Organization</FormLabel>
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
          <FormLabel className="text-white">Message</FormLabel>
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