import React from 'react'
import { GettingStartedButton, HomeHeaderContainer } from './styles'
import { ItalicsText, MainHeaderText, Paragraph, SubHeaderText } from '../../components/Common/styles'

const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
}

const Home = () => {
    return (
        <>
            <HomeHeaderContainer>
                <SubHeaderText>Welcome to</SubHeaderText>
                <MainHeaderText>The Dating Cheatsheet</MainHeaderText>
                <SubHeaderText>
                    <ItalicsText>
                    Once a cheater, always a cheater
                    </ItalicsText>
                </SubHeaderText>
                <Paragraph>
                    Bestie, just caught your partner cheating? Come on, spill the 🍵 and expose that clown for the snake they are! 
                </Paragraph>
                <GettingStartedButton onClick={scrollDown}>Start the exposé ✨</GettingStartedButton>
            </HomeHeaderContainer>
        </>
    )
}

export default Home