import React, { Fragment } from 'react'
import styled from 'styled-components'
import { WizardProps } from 'react-wizard'

export const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 1.09;
  padding: 0;
`
export const Subtitle = styled.div`
  font-size: 14px;
  line-height: 1.09;
  padding: 0;
  padding: 20px 0;
`

interface IHeaderProps extends WizardProps {}

const Header = (props: IHeaderProps) => {
  return (
    <Fragment>
      <Text>Welcome to the wizard!</Text>
      <Subtitle>
        This is the step {props.currentStep + 1}/{props.countSteps}
      </Subtitle>
    </Fragment>
  )
}
export default Header
