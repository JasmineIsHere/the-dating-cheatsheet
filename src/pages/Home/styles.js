import styled from "styled-components";
import softLavenderTheme from "../../utils/colors";

export const HomeHeaderContainer = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  font-size: calc(10px + 2vmin);
`;

export const GettingStartedButton = styled.button`
    background-color: ${softLavenderTheme.shade};
    color: ${softLavenderTheme.primary};
    border: none;
    border-radius: 5px;
    margin-top: 5rem;
    padding: 0.75rem 1.5rem;
    font-size: 2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: ${softLavenderTheme.primary};
        color: ${softLavenderTheme.background};
    }
  }
`;

export const SubButton = styled.button`
    background-color: transparent;
    color: ${softLavenderTheme.primary};
    border: 2px solid ${softLavenderTheme.shade};
    border-radius: 5px;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: ${softLavenderTheme.primary};
        color: ${softLavenderTheme.background};
        border: 2px solid ${softLavenderTheme.primary};
    }
`;
