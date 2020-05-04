import React from 'react'
import styled from 'styled-components'

export const StatusBarContainer = styled.div`
  margin-bottom: 15px;
  background-color: #efeef5;
  border-radius: 10px;
`

export const StatusBarProgress = styled.div<StatusBarProps>`
  height: 6px;
  background-color: #4ca1ff;
  transition: width 0.2s;
  width: ${(props: StatusBarProps) => (100 / props.countSteps) * (props.currentStep + 1)}%;
  border-radius: 10px;
`

export interface StatusBarProps {
  currentStep: number
  countSteps: number
}
export const StatusBar = (props: StatusBarProps) => (
  <StatusBarContainer>
    <StatusBarProgress countSteps={props.countSteps} currentStep={props.currentStep} />
  </StatusBarContainer>
)
