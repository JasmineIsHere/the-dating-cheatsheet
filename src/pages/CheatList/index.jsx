import React, { useState } from 'react'
import { CheatItem, CheatListContainer, CheatListPageContainer, CheaterName, SusButton, ExpandableSection } from './styles'
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
            <CheatListContainer>
                {
                    cheatersData.map(cheater => (
                        <Cheater key={cheater.id} name={cheater.name} location={cheater.location} traits={cheater.traits} />
                    ))
                }
            </CheatListContainer>
        </CheatListPageContainer>
    )
}

const Cheater = ({ name, location, traits }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
            <CheatItem>
                <CheaterName>{name}</CheaterName>
                <SusButton onClick={toggleExpand}>Sus</SusButton>
            </CheatItem>
            <ExpandableSection style={{ maxHeight: isExpanded ? '200px' : '0', overflow: 'hidden' }}>
                <Paragraph>
                    Location: {location}<br></br>Known traits: {traits}</Paragraph>
            </ExpandableSection>
        </>
    )
}

export default CheatList