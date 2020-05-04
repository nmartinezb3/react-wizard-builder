import React from 'react'
import styled from 'styled-components'

export interface StatusBarProps {
  currentStep: number
  countSteps: number
  statusBarClassName?: string
  statusBarProgressClassName?: string
}
interface StatusBarProgressProps {
  currentStep: number
  countSteps: number
}

export const StatusBarProgress = styled.div<StatusBarProgressProps>`
  height: 6px;
  background-color: #4ca1ff;
  transition: width 0.2s;
  width: ${(props: StatusBarProps) => (100 / props.countSteps) * (props.currentStep + 1)}%;
  border-radius: 10px;
`
export const StatusBarContainer = styled.div`
  margin-bottom: 15px;
  background-color: #efeef5;
  border-radius: 10px;
`

export const StatusBar = (props: StatusBarProps) => (
  <StatusBarContainer className={props.statusBarClassName}>
    <StatusBarProgress
      className={props.statusBarProgressClassName}
      countSteps={props.countSteps}
      currentStep={props.currentStep}
    />
  </StatusBarContainer>
)
