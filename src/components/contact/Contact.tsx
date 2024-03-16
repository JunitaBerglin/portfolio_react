import { useState, FormEvent, ChangeEvent } from "react";
import {
  ContactSection,
  Form,
  FormContainer,
  Input,
  Label,
  Text,
  TextArea,
  Title,
} from "./Contact.styles";
import { LiveDemo } from "../PortfolioWork/PortfolioWork.styles";

export const Contact = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      alert("Please fill out all required fields :)");
      return;
    }

    // Form data for submission
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    try {
      const response = await fetch(
        "https://formsubmit.co/68a04b80f29cd1ae7d696341179067a2",
        {
          method: "POST",
          body: formData, // Sending as FormData
          headers: {
            Accept: "application/json", // Expecting JSON response
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      console.log("Submission successful");
      alert("Thank you for your message!");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Submission failed", error);
      alert(
        "There was a problem with your submission. Please try again."
      );
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
    <ContactSection>
      <Title>Get in touch!</Title>
      <Form
        action="https://formsubmit.co/68a04b80f29cd1ae7d696341179067a2"
        method="POST">
        <FormContainer>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={firstName}
            onChange={handleInputChange}
          />
        </FormContainer>
        <FormContainer>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={lastName}
            onChange={handleInputChange}
          />
        </FormContainer>
        <FormContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={handleInputChange}
          />
        </FormContainer>
        <FormContainer>
          <Label htmlFor="phone">Phone</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
        </FormContainer>
        <FormContainer>
          <Label htmlFor="message">Your Message</Label>
          <TextArea
            id="message"
            name="message"
            required
            value={message}
            onChange={handleInputChange}></TextArea>
        </FormContainer>
        <LiveDemo
          onClick={() => {
            handleSubmit;
          }}>
          Submit
        </LiveDemo>
      </Form>
      <Text>Or, email me directly at junita.berglin@gmail.com!</Text>
    </ContactSection>
  );
};
