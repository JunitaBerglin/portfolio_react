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
} from "./contact.styles";
import Button from "../Home/Animation/Button";

export const Contact = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("📧 Form submission started.");

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill out all required fields :)",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Create form data using application/x-www-form-urlencoded format
      const formBody = new URLSearchParams();
      formBody.append("name", `${firstName} ${lastName}`);
      formBody.append("email", email);
      formBody.append("phone", phone || "Not provided");
      formBody.append("message", message);
      formBody.append("_subject", `New contact from ${firstName} ${lastName}`);
      formBody.append("_template", "table");
      formBody.append("_captcha", "false"); // Disable captcha for better UX

      console.log("📤 Sending form data:", Object.fromEntries(formBody));
      console.log("🌐 Current domain:", window.location.hostname);

      const response = await fetch(
        "https://formsubmit.co/ajax/68a04b80f29cd1ae7d696341179067a2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
          body: formBody.toString(),
        }
      );

      console.log("📡 Response status:", response.status);
      console.log("📡 Response ok:", response.ok);

      const data = await response.json();
      console.log("📬 Full Response:", data);

      if (response.ok && data.success) {
        console.log("✅ Submission successful - Email should be sent!");
        console.log("📧 Check your email:", "junita.berglin@gmail.com");
        console.log("⚠️ First time? Check spam and verify your email!");

        setSubmitStatus({
          type: "success",
          message:
            "Thank you for your message! I'll get back to you soon. 🎉 (Check your spam folder if this is your first submission)",
        });

        // Clear form
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");

        // Clear success message after 8 seconds (longer to read)
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 8000);
      } else {
        console.error("❌ Response not ok:", data);
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("❌ Submission failed:", error);
      setSubmitStatus({
        type: "error",
        message:
          "There was a problem with your submission. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
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

      {/* Status Messages */}
      {submitStatus.type === "success" && (
        <div
          style={{
            padding: "15px",
            margin: "20px 0",
            backgroundColor: "#d4edda",
            border: "2px solid #28a745",
            borderRadius: "8px",
            color: "#155724",
            textAlign: "center",
            fontFamily: "thin",
          }}
        >
          ✅ {submitStatus.message}
        </div>
      )}

      {submitStatus.type === "error" && (
        <div
          style={{
            padding: "15px",
            margin: "20px 0",
            backgroundColor: "#f8d7da",
            border: "2px solid #dc3545",
            borderRadius: "8px",
            color: "#721c24",
            textAlign: "center",
            fontFamily: "thin",
          }}
        >
          ⚠️ {submitStatus.message}
        </div>
      )}

      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={firstName}
            onChange={handleInputChange}
            disabled={isSubmitting}
            placeholder="Enter your first name"
          />
        </FormContainer>
        <FormContainer>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={lastName}
            onChange={handleInputChange}
            disabled={isSubmitting}
            placeholder="Enter your last name"
          />
        </FormContainer>
        <FormContainer>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={handleInputChange}
            disabled={isSubmitting}
            placeholder="your.email@example.com"
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
            disabled={isSubmitting}
            placeholder="+46 123 456 789 (optional)"
          />
        </FormContainer>
        <FormContainer>
          <Label htmlFor="message">Your Message *</Label>
          <TextArea
            id="message"
            name="message"
            required
            value={message}
            onChange={handleInputChange}
            disabled={isSubmitting}
            placeholder="Write your message here..."
            rows={5}
          />
        </FormContainer>
        <Text>
          <Button
            type="submit"
            backgroundColor="#b16002"
            disabled={isSubmitting}
            style={{
              opacity: isSubmitting ? 0.6 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? "Sending... ⏳" : "Submit"}
          </Button>
          Or, email me directly at{" "}
          <a
            href="mailto:junita.berglin@gmail.com"
            style={{ color: "#b16002", textDecoration: "underline" }}
          >
            junita.berglin@gmail.com
          </a>
          !
        </Text>
      </Form>
    </ContactSection>
  );
};
