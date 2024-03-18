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
  font-size: 20px;
  text-align: center;
  width: 100%;

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

export const Button = styled.button`
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 20px;
  padding: 7px;
  border-radius: 8px;
  background: #ffad01;
  border: none;
  color: black;
  text-decoration: none;
  font-family: "thin";
  display: inline-block;

  &:hover {
    background-color: #ffffdf;
    border: 1px solid #000;
    color: #000;
  }
`;
