import React from 'react'
import { ExposeFormContainer, FieldLabel, FormTitle, Reminder, SubmitButton, TextAreaInput } from './styles'

const ExposeForm = () => {
  return (
    <ExposeFormContainer>
      <FormTitle>Name and Shame</FormTitle>
      <Reminder>Friendly Reminder: They screwed up but you are way classier than they ever will be.
        <br/>No need to lower ourselves to the same level as garbage.</Reminder>
      <ExposeFormContainer>
        <FieldLabel>What do you call that trash?</FieldLabel>
        <TextAreaInput rows={1} placeholder="AKA what do normal people know them as?" />
        <FieldLabel>Any easy identifiers?</FieldLabel>
        <TextAreaInput rows={1} placeholder="Instagram, TikTok, Facebook, Twitter, etc." />
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