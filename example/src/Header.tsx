import React, { Fragment } from 'react'
import { WizardFramework } from '../../src/components/Wizard'

const Header = (props: WizardFramework) => {
  return (
    <Fragment>
      <div className='title'>Welcome to the wizard!</div>
      <div className='subtitle'>
        This is the step {props.currentStep + 1}/{props.countSteps}
      </div>
    </Fragment>
  )
}
export default Header
