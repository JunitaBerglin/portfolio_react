import { useState, FormEvent, ChangeEvent } from "react";
import {
  Button,
  ContactSection,
  Form,
  FormContainer,
  Input,
  Label,
  Text,
  TextArea,
  Title,
} from "./Contact.styles";

export const Contact = () => {
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const toggleContact = () => {
    setContactOpen(!contactOpen);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Basic validation example
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      alert("Please fill out all required fields :)");
      return;
    }

    // Here you might send the data to a server manually if not using FormSubmit
    console.log("Submitting form ==>", {
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    // Since you're using FormSubmit.co, you might redirect or clear the form here
    // For now, let's just clear the form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");

    // Optionally, provide feedback or redirect the user
    alert("Thank you for your message!");
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
        method="POST"
      >
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
            onChange={handleInputChange}
          ></TextArea>
        </FormContainer>
        <Button type="submit">Submit</Button>
      </Form>
      <Text>Or, email me directly at junita.berglin@gmail.com!</Text>
    </ContactSection>
  );
};
