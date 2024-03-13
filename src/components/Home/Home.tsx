import React from "react";
import {
  WrapperOfJunita,
  BigName,
  WrapperOfBerglin,
  MiddleMovement,
  MiddleMovementText,
  Move,
} from "./Home.styles";

const HomePage: React.FC = () => {
  return (
    <>
      <WrapperOfJunita>
        <BigName>JUNITA</BigName>
      </WrapperOfJunita>

      <MiddleMovement>
        <MiddleMovementText>
          <Move>F R O N T E N D D E V E L O P E R</Move>
        </MiddleMovementText>
      </MiddleMovement>

      <WrapperOfBerglin>
        <BigName>BERGLIN</BigName>
      </WrapperOfBerglin>
    </>
  );
};

export default HomePage;
