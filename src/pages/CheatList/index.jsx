import React from 'react'
import { CheatItem, CheatListContainer, CheatListPageContainer, CheaterDetails, CheaterName, DiveInButton } from './styles'
import { MainHeaderText, Paragraph, SubHeaderText } from '../../components/Common/styles'
import { cheatersData } from '../../utils/staticData'

const CheatList = () => {
  return (
    <CheatListPageContainer>
        <MainHeaderText>The Cheat List</MainHeaderText>
        <SubHeaderText>See someone familiar here? They might very well be the same person - or they may not!
        </SubHeaderText>
        <Paragraph>Do what you will with the information you find here, but remember to always stay safe and trust your gut. 😉
        </Paragraph>
        {
            cheatersData.map(cheater => (
                <Cheater key={cheater.id} name={cheater.name} details={cheater.details} />
            ))
        }
    </CheatListPageContainer>
  )
}

const Cheater = ({name, details}) => {
    return (
        <CheatItem>
            <CheaterName>{name}</CheaterName>
            <CheaterDetails>{details}</CheaterDetails>
            <DiveInButton>Sus</DiveInButton>
        </CheatItem>
    )
}

export default CheatList