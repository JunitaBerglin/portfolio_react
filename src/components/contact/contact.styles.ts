import styled from "styled-components";
import { desktopStyles } from "../Global/style-variables/variables";

export const ContactSection = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 100vw;
  font-family: "thin";
`;

export const Title = styled.h2`
  font-size: 30px;
  width: 80%;
  padding: 30px;

  ${desktopStyles} {
    font-size: 50px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 460px;
  padding-top: 20px;
  font-size: 20px;
  text-align: center;
  width: 20%;

  ${desktopStyles} {
    font-size: 25px;
  }
`;

export const Form = styled.form`
  width: 80vw;
  text-align: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Label = styled.label`
  text-align: start;
  padding: 5px;
  font-size: 24px;
  margin-top: 6px;
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
