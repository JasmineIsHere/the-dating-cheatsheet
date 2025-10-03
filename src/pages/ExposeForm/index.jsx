import React from 'react'
import { ExposeFormContainer, FieldLabel, FormTitle, Reminder, SubmitButton, TextAreaInput } from './styles'

const ExposeForm = () => {
  return (
    <ExposeFormContainer>
      <FormTitle>Name and Shame</FormTitle>
      <Reminder>PSA: They screwed up but we are way classier than they ever will be
        <br/>No need to lower ourselves to the same level as garbage 💅</Reminder>
      <ExposeFormContainer>
        <FieldLabel>What did you call that trash?</FieldLabel>
        <TextAreaInput rows={1} placeholder="AKA what do normal people know them as?" />
        <FieldLabel>Any easy identifiers or characteristics?</FieldLabel>
        <TextAreaInput rows={1} placeholder="Social media (Instagram, TikTok, Twitter, etc.) or physical characteristics" />
        <FieldLabel>Where was the shit located?</FieldLabel>
        <TextAreaInput rows={1} placeholder="Country/city/area where people are likely to meet them" />
        <FieldLabel>What in the bloody audacity did they do?</FieldLabel>
        <TextAreaInput rows={4} placeholder="C'mon, let it all out. This will be kept confidential and anonymous until and unless you choose to share it." />
      </ExposeFormContainer>
      <SubmitButton>🖕 Submit 🖕</SubmitButton>
    </ExposeFormContainer>
  )
}

export default ExposeForm