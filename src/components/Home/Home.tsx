import React from "react";
import {
  WrapperOfJunita,
  BigName,
  WrapperOfBerglin,
  InnerHomeWrapper,
  OuterHomeWrapper,
} from "../Home/Home.styles";
import EyeComponent, { EyeWrapper } from "./Animation/Eye";
import MovingText from "./Animation/TextMoving";

const HomePage: React.FC = () => {
  return (
    <OuterHomeWrapper>
      <InnerHomeWrapper>
        <WrapperOfJunita>
          <BigName>JUNITA</BigName>
        </WrapperOfJunita>
        <MovingText />
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
