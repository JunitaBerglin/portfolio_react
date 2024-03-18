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
} from "../Home/Home.styles";
import EyeComponent, { EyeWrapper } from "./Animation/Eye";

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
          <BigName>
            <EyeWrapper>
              <EyeComponent />
            </EyeWrapper>
            BERGLIN
          </BigName>
        </WrapperOfBerglin>
      </InnerHomeWrapper>
    </OuterHomeWrapper>
  );
};

export default HomePage;
