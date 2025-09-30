import React from 'react'
import { AppLogo, GettingStartedButton, HomeHeader, MainHeaderText, Paragraph, SubHeaderText } from './styles'
import { ItalicsText } from '../../components/Common/styles'

const Home = () => {
    return (
        <>
            <HomeHeader>
                <SubHeaderText>Welcome to</SubHeaderText>
                <MainHeaderText>The Dating Cheatsheet</MainHeaderText>
                <SubHeaderText>
                    <ItalicsText>
                    Once a cheater, always a cheater
                    </ItalicsText>
                </SubHeaderText>
                <Paragraph>
                    Bestie, just caught your partner cheating? Come on, spill the 🍵 and expose that clown for the liar they are! 
                </Paragraph>
                <GettingStartedButton>Start the exposé ✨</GettingStartedButton>
            </HomeHeader>
        </>
    )
}

export default Home