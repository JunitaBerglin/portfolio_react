import styled, { css } from "styled-components";

export const colors = {
  primary: "#f9d080",
  secondaryLight: "white",
  secondaryDark: "black",
};

export const desktopStyles = css`
  @media (min-width: 768px) {
    & {
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;

export const linkStyles = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    background-color: #ffffdf;
    transition: 2000ms;
  }
`;

export const mixins = {
  footer: css`
    border: 10px;
  `,
  link: css`
    text-decoration: solid;

    &:hover {
      cursor: pointer;
      transform: scale(1.3);
      transition: 700ms;
    }
  `,

  image: css`
    height: 150px;
    width: 250px;
    border-radius: 30px;
    border: solid 0.8px #fff;
  `,

  project: css`
    background-color: #000;
    color: #fff;
    border-radius: 60px;
  `,
};
