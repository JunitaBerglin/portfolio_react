import styled from "styled-components";
import { desktopStyles } from "../Global/style-variables/variables";

export const ContactSection = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: "thin";
  min-width: 100vw;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 30px;
  padding: 30px;

  ${desktopStyles} {
    font-size: 50px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  font-size: 16px;
  text-align: center;

  ${desktopStyles} {
    font-size: 20px;
    padding-top: 20px;
  }
`;

export const Form = styled.form`
  text-align: center;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  max-width: 500px;

  ${desktopStyles} {
    max-width: 700px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Label = styled.label`
  text-align: start;
  padding: 8px 0;
  font-size: 18px;
  margin-top: 10px;

  ${desktopStyles} {
    font-size: 22px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  padding: 0 10px;
  font-size: 16px;
  box-sizing: border-box;

  ${desktopStyles} {
    height: 45px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  border-radius: 5px;
  border: none;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
  resize: vertical;

  ${desktopStyles} {
    height: 180px;
  }
`;
