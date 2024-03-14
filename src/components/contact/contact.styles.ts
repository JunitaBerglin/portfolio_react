import styled from "styled-components";
import { desktopStyles } from "../Global/style-variables/variables";

export const ContactSection = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 100vw;
  font-family: "lemon";
`;

export const Title = styled.h2`
  font-size: 1rem;
  width: 80%;
  padding: 30px;

  ${desktopStyles} {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  font-size: 1.5rem;
  text-align: center;
  width: 100%;

  ${desktopStyles} {
    font-size: 2rem; // Adjust as needed
  }
`;

export const Form = styled.form`
  width: 80vw;
  text-align: center;

  ${desktopStyles} {
    width: 60vw;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Label = styled.label`
  text-align: start;
  padding: 5px;

  ${desktopStyles} {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 80vw;
  height: 30px;
  border-radius: 5px;
  border: none;

  ${desktopStyles} {
    width: 29vw;
  }
`;

export const TextArea = styled.textarea`
  width: 80vw;
  max-width: 80vw;
  height: 150px;
  border-radius: 5px;
  border: none;
  padding: 10px;

  ${desktopStyles} {
    width: 58vw;
    max-width: 60vw;
  }
`;

export const Button = styled.button`
  font-size: 1rem;
  border: 1px solid #000;
  border-radius: 5px;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 100px;

  &:hover {
    background-color: #ffffdf;
    border: 1px solid #000;
    color: #000;

    ${desktopStyles} {
      cursor: pointer;
    }
  }
`;
