import styled from "styled-components";
import softLavenderTheme from "../../utils/colors";

export const ExposeFormContainer = styled.div`
    height: fit-content;
    min-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 4rem;
    padding: 2rem;
    border: 5px solid ${softLavenderTheme.primary};
    border-radius: 10px;
`;

export const FormTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
    font-family: 'Arial Black', sans-serif;
    margin-bottom: 1rem;
`;

export const Reminder = styled.div`
    font-size: 1rem;
    font-style: italic;
    color: ${softLavenderTheme.shade};
    margin-bottom: 1rem;
`;

export const FieldLabel = styled.div`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

export const TextAreaInput = styled.textarea`    
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid ${softLavenderTheme.shade};
    border-radius: 5px;
    margin-bottom: 1rem;

    &::placeholder {
        text-align: center;
        font-family: 'Arial', sans-serif;
    }
`;

export const SubmitButton = styled.button`
    background-color: ${softLavenderTheme.shade};
    color: ${softLavenderTheme.primary};
    border: none;
    border-radius: 5px;
    padding: 0.75rem 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${softLavenderTheme.secondary};
    }
`;