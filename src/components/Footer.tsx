import React from 'react'
import styled, { css } from 'styled-components'
import { WizardFramework } from './Wizard'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`

const Button = styled.button`
  cursor: pointer;
  outline: none;
  color: white;
  background: #0080de;
  border: 1px solid #0080de;
  border-radius: 4px;
  font-family: 'Lato', sans-serif;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  font-size: 14px;
  height: 40px;
  text-transform: uppercase;
  width: 100%;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  font-weight: bold;
  max-width: 110px;
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
      background-color: #ffffff;
      border: 1px solid #eeeeee;
      color: #0080de;
    `};
`

export interface FooterProps extends WizardFramework {
  previousStepLabel?: string
  nextStepLabel?: string
  finishStepLabel?: string
  className?: string
}

export function Footer(props: FooterProps) {
  return (
    <ButtonContainer className={props.className}>
      <Button onClick={props.previous} disabled={props.firstStep}>
        {props.previousStepLabel || 'Previous'}
      </Button>
      <Button onClick={props.next}>
        {props.lastStep ? props.finishStepLabel || 'Finish' : props.nextStepLabel || 'Next'}
      </Button>
    </ButtonContainer>
  )
}
