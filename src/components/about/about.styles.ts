import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  // Use your mixins and variables as JavaScript logic/functions and constants
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const AboutDescription = styled.p`
  width: 80%;
  color: #ffffff;
  background-color: black;
  padding: 30px;
  border-radius: 60px;
  margin-top: 10px;
  // Include your media query logic here
  @media (min-width: 768px) {
    width: 45%;
  }
`;

export const AboutImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: solid 1px #ffffff;
  @media (min-width: 768px) {
    height: 200px;
    width: 200px;
  }
`;
