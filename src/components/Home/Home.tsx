import React from "react";
import {
  WrapperOfJunita,
  BigName,
  WrapperOfBerglin,
  MiddleMovement,
  MiddleMovementText,
  Move,
  InnerHomeWrapper,
  OuterHomeWrapper,
} from "@/Components/Home/Home.styles";

const HomePage: React.FC = () => {
  return (
    <OuterHomeWrapper>
      <InnerHomeWrapper>
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
      </InnerHomeWrapper>
    </OuterHomeWrapper>
  );
};

export default HomePage;
