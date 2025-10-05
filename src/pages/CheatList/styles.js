import styled from "styled-components";
import softLavenderTheme from "../../utils/colors";

export const CheatListPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 4rem;
`;

export const Tip = styled.div`
    width: 50px;
    height: fit-content;
    background-color: yellow;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    padding: 0.5rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    position: absolute;

`;

export const SearchBar = styled.input`
    width: 50%;
    padding: 0.5rem;
    font-size: 1rem;
    margin-bottom: 2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const CheatListContainer = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CheatItem = styled.div`
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
`;

export const CheaterName = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

export const CheaterDetails = styled.div`
    font-size: 1rem;
    color: #555;
`;

export const DiveInButton = styled.button`
    background-color: ${softLavenderTheme.shade};
    color: ${softLavenderTheme.primary};
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${softLavenderTheme.secondary};
        color: ${softLavenderTheme.background};
    }
`;

export const ExpandableSection = styled.div`
    width: 100%;
    background-color: ${softLavenderTheme.highlight};
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 0 1rem;
    text-align: left;

    
    transition: max-height 0.3s ease-out;
`;