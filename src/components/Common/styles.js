import styled, { keyframes } from "styled-components";


export const ItalicsText = styled.span`
    font-style: italic;
`;

// Add this to components you want to spin
// @media (prefers-reduced-motion: no-preference) {
//     animation: ${(props) => (props.spin ? Spin : "none")} infinite 20s linear;
//   }
export const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


export const Bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
`;

export const Typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

export const Blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: black; }
`;
