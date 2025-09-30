import styled from "styled-components";
import softLavenderTheme from "../../utils/colors";

export const HomeHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  font-size: calc(10px + 2vmin);
`;

export const MainHeaderText = styled.div`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

export const SubHeaderText = styled.div`
  font-size: 2rem;
  font-weight: semi-bold;
  margin-bottom: 0.75rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
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
        background-color: ${softLavenderTheme.secondary};
    }
  }
`;
