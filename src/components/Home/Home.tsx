import React from "react";
import {
  WrapperOfJunita,
  BigName,
  WrapperOfBerglin,
  MiddleMovement,
  MiddleMovementText,
  Move,
  HomeWrapper,
} from "./Home.styles";

const HomePage: React.FC = () => {
  return (
    <HomeWrapper>
      <WrapperOfJunita>
        <BigName>JUNITA</BigName>
      </WrapperOfJunita>

      <MiddleMovement>
        <MiddleMovementText>
          <Move>F R O N T E N D . D E V E L O P E R</Move>
        </MiddleMovementText>
      </MiddleMovement>

      <WrapperOfBerglin>
        <BigName>BERGLIN</BigName>
      </WrapperOfBerglin>
    </HomeWrapper>
  );
};

export default HomePage;
