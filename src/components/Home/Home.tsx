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
            BE
            <span style={{ position: "relative", display: "inline-block" }}>
              R
              <EyeWrapper>
                <EyeComponent />
              </EyeWrapper>
            </span>
            GLIN
          </BigName>
        </WrapperOfBerglin>
      </InnerHomeWrapper>
    </OuterHomeWrapper>
  );
};

export default HomePage;
