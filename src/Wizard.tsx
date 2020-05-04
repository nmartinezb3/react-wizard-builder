import React from 'react'
import { StatusBarProps, StatusBar } from './StatusBar'

interface RenderComponentProps {
  currentStep: number
  countSteps: number
  next: () => any
  previous: () => any
  goToStep: (step: number) => any
  lastStep: boolean
  firstStep: boolean
  render?: (props: RenderComponentProps) => React.ReactChild
}

interface IWizardProps {
  renderHeader: (props: RenderComponentProps) => React.ReactNode
  renderStatusBar: (props: RenderComponentProps) => React.ReactNode
  onNextStep: (params: { currentStep: number }) => any
  onPreviousStep: (params: { currentStep: number }) => any
  hideStatusBar: boolean
  children: React.ReactChild
  initialStep?: number
}

interface ISWizardState {
  currentStep: number
}

class Wizard extends React.Component<IWizardProps, ISWizardState> {
  static StatusBar = (props: StatusBarProps) => <StatusBar {...props} />

  static Step = ({ render, ...props }: RenderComponentProps) => (render ? render(props) : null)

  constructor(props: IWizardProps) {
    super(props)
    this.state = {
      currentStep: props.initialStep || 0
    }
  }

  goToStep = (step: number) => {
    this.setState({
      currentStep: step
    })
  }

  next = () => {
    if (!this.isLastStep()) {
      if (this.props.onNextStep) {
        this.props.onNextStep({ currentStep: this.state.currentStep })
      }
      this.setState((prevState) => ({
        currentStep: prevState.currentStep + 1
      }))
    }
  }

  previous = () => {
    if (!this.isFirstStep()) {
      if (this.props.onPreviousStep) {
        this.props.onPreviousStep({ currentStep: this.state.currentStep })
      }
      this.setState((prevState) => ({
        currentStep: prevState.currentStep - 1
      }))
    }
  }

  isLastStep = (): boolean => {
    return this.state.currentStep === React.Children.count(this.props.children) - 1
  }

  isFirstStep = (): boolean => {
    return this.state.currentStep === 0
  }

  renderStatusBar = () => {
    if (this.props.hideStatusBar) {
      return null
    }
    if (this.props.renderStatusBar) {
      return this.props.renderStatusBar({
        currentStep: this.state.currentStep,
        countSteps: React.Children.count(this.props.children),
        next: this.next,
        previous: this.previous,
        goToStep: this.goToStep,
        lastStep: this.isLastStep(),
        firstStep: this.isFirstStep()
      })
    }
    return (
      <Wizard.StatusBar currentStep={this.state.currentStep} countSteps={React.Children.count(this.props.children)} />
    )
  }

  render() {
    const { currentStep } = this.state
    const { renderHeader, children } = this.props
    return (
      <div>
        {this.renderStatusBar()}
        <div>
          {renderHeader({
            currentStep,
            next: this.next,
            previous: this.previous,
            lastStep: this.isLastStep(),
            firstStep: this.isFirstStep(),
            goToStep: this.goToStep,
            countSteps: React.Children.count(this.props.children)
          })}
        </div>
        <div>
          {React.cloneElement(children[this.state.currentStep], {
            open: true,
            currentStep,
            next: this.next,
            previous: this.previous,
            lastStep: this.isLastStep(),
            firstStep: this.isFirstStep(),
            goToStep: this.goToStep
          })}
        </div>
      </div>
    )
  }
}

export default Wizard
