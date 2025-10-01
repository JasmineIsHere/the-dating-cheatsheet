import styled, { keyframes } from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
`;

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${(props) => (props.spin ? AppLogoSpin : "none")} infinite 20s linear;
  }
`;

export const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;