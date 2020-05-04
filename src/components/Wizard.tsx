import React, { useState } from 'react'
import { StatusBarProps, StatusBar } from './StatusBar'
import { Footer, FooterProps } from './Footer'
import { WizardContainer, StepContainer } from './Wizard.styles'

export interface WizardProps {
  currentStep: number
  countSteps: number
  next: () => any
  previous: () => any
  goToStep: (step: number) => any
  lastStep: boolean
  firstStep: boolean
}
export interface WizardRenderProps extends WizardProps {
  render: (props: WizardProps) => React.ReactChild
}

interface IWizardProps {
  renderHeader: (props: WizardProps) => React.ReactNode
  renderStatusBar: (props: WizardProps) => React.ReactNode
  hideStatusBar: boolean
  renderFooter: (props: WizardProps) => React.ReactNode
  hideFooter: boolean
  onNextStep: (params: WizardProps) => any
  onPreviousStep: (params: WizardProps) => any
  onFinish: (params: WizardProps) => any
  children: React.ReactChild
  initialStep?: number
  previousStepLabel?: string
  nextStepLabel?: string
  finishStepLabel?: string
}

export function Wizard(props: IWizardProps) {
  const [currentStep, setCurrentStep] = useState(props.initialStep || 0)
  const getPropsBag = () => ({
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
      props.onFinish(getPropsBag())
    } else {
      if (props.onNextStep) {
        props.onNextStep(getPropsBag())
      }
      setCurrentStep((prevStep) => prevStep + 1)
    }
  }

  const previous = () => {
    if (!isFirstStep()) {
      if (props.onPreviousStep) {
        props.onPreviousStep(getPropsBag())
      }
      setCurrentStep((prevStep) => prevStep - 1)
    }
  }

  const renderStatusBar = () => {
    if (props.hideStatusBar) {
      return null
    }
    if (props.renderStatusBar) {
      return props.renderStatusBar(getPropsBag())
    }
    return <Wizard.StatusBar currentStep={currentStep} countSteps={React.Children.count(props.children)} />
  }

  const renderFooter = () => {
    if (props.hideFooter) {
      return null
    }
    if (props.renderFooter) {
      return props.renderFooter(getPropsBag())
    }
    return (
      <Wizard.Footer
        {...getPropsBag()}
        previousStepLabel={props.previousStepLabel}
        nextStepLabel={props.nextStepLabel}
        finishStepLabel={props.finishStepLabel}
      />
    )
  }

  const { renderHeader, children } = props
  return (
    <WizardContainer>
      {renderStatusBar()}
      <div>{renderHeader(getPropsBag())}</div>
      <StepContainer>{React.cloneElement(children[currentStep], getPropsBag())}</StepContainer>
      {renderFooter()}
    </WizardContainer>
  )
}

Wizard.StatusBar = (props: StatusBarProps) => <StatusBar {...props} />
Wizard.Footer = (props: FooterProps) => <Footer {...props} />

Wizard.Step = ({ render, ...props }: WizardRenderProps) => (render ? render(props) : null)
