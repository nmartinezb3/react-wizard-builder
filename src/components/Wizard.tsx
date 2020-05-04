import React, { useState } from 'react'
import { StatusBar } from './StatusBar'
import { Footer } from './Footer'
import { WizardContainer, StepContainer } from './Wizard.styles'

export interface WizardFramework {
  currentStep: number
  countSteps: number
  next: () => any
  previous: () => any
  goToStep: (step: number) => any
  lastStep: boolean
  firstStep: boolean
}
export interface WizardRenderProps extends WizardFramework {
  render: (props: WizardFramework) => React.ReactChild
}

interface WizardProps {
  renderHeader: (props: WizardFramework) => React.ReactNode
  renderStatusBar: (props: WizardFramework) => React.ReactNode
  hideStatusBar: boolean
  renderFooter: (props: WizardFramework) => React.ReactNode
  hideFooter: boolean
  onNextStep: (params: WizardFramework) => any
  onPreviousStep: (params: WizardFramework) => any
  onFinish: (params: WizardFramework) => any
  children: React.ReactChild
  initialStep?: number
  previousStepLabel?: string
  nextStepLabel?: string
  finishStepLabel?: string
  className?: string
  footerClassName?: string
  statusBarClassName?: string
  statusBarProgressClassName?: string
}

export function Wizard(props: WizardProps) {
  const [currentStep, setCurrentStep] = useState(props.initialStep || 0)
  const getToolset = (): WizardFramework => ({
    currentStep,
    countSteps: React.Children.count(props.children),
    next: next,
    previous: previous,
    goToStep: goToStep,
    lastStep: isLastStep(),
    firstStep: isFirstStep()
  })
  const isLastStep = (): boolean => {
    return currentStep === React.Children.count(props.children) - 1
  }

  const isFirstStep = (): boolean => {
    return currentStep === 0
  }
  const goToStep = (step: number) => {
    setCurrentStep(step)
  }

  const next = () => {
    if (isLastStep()) {
      props.onFinish(getToolset())
    } else {
      if (props.onNextStep) {
        props.onNextStep(getToolset())
      }
      setCurrentStep((prevStep) => prevStep + 1)
    }
  }

  const previous = () => {
    if (!isFirstStep()) {
      if (props.onPreviousStep) {
        props.onPreviousStep(getToolset())
      }
      setCurrentStep((prevStep) => prevStep - 1)
    }
  }

  const renderStatusBar = () => {
    if (props.hideStatusBar) {
      return null
    }
    if (props.renderStatusBar) {
      return props.renderStatusBar(getToolset())
    }
    return (
      <Wizard.StatusBar
        statusBarClassName={props.statusBarClassName}
        statusBarProgressClassName={props.statusBarProgressClassName}
        currentStep={currentStep}
        countSteps={React.Children.count(props.children)}
      />
    )
  }

  const renderFooter = () => {
    if (props.hideFooter) {
      return null
    }
    if (props.renderFooter) {
      return props.renderFooter(getToolset())
    }
    return (
      <Wizard.Footer
        className={props.footerClassName}
        {...getToolset()}
        previousStepLabel={props.previousStepLabel}
        nextStepLabel={props.nextStepLabel}
        finishStepLabel={props.finishStepLabel}
      />
    )
  }

  const { renderHeader, children } = props
  return (
    <WizardContainer className={props.className}>
      {renderStatusBar()}
      <div>{renderHeader(getToolset())}</div>
      <StepContainer>{React.cloneElement(children[currentStep], getToolset())}</StepContainer>
      {renderFooter()}
    </WizardContainer>
  )
}

Wizard.StatusBar = StatusBar
Wizard.Footer = Footer
Wizard.Step = ({ render, ...props }: WizardRenderProps) => (render ? render(props) : null)
