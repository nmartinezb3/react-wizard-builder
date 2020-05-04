import React, { useState } from 'react';
import styled, { css } from 'styled-components';

let _ = t => t,
    _t,
    _t2;
const StatusBarContainer = styled.div(_t || (_t = _`
  margin-bottom: 15px;
  background-color: #efeef5;
  border-radius: 10px;
`));
const StatusBarProgress = styled.div(_t2 || (_t2 = _`
  height: 6px;
  background-color: #4ca1ff;
  transition: width 0.2s;
  width: ${0}%;
  border-radius: 10px;
`), props => 100 / props.countSteps * (props.currentStep + 1));
const StatusBar = props => React.createElement(StatusBarContainer, null, React.createElement(StatusBarProgress, {
  countSteps: props.countSteps,
  currentStep: props.currentStep
}));

let _$1 = t => t,
    _t$1,
    _t2$1,
    _t3;
const ButtonContainer = styled.div(_t$1 || (_t$1 = _$1`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`));
const Button = styled.button(_t2$1 || (_t2$1 = _$1`
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
  ${0};
`), props => props.disabled && css(_t3 || (_t3 = _$1`
      cursor: not-allowed;
      opacity: 0.5;
      background-color: #ffffff;
      border: 1px solid #eeeeee;
      color: #0080de;
    `)));
function Footer(props) {
  return React.createElement(ButtonContainer, null, React.createElement(Button, {
    onClick: props.previous,
    disabled: props.firstStep
  }, props.previousStepLabel || 'Previous'), React.createElement(Button, {
    onClick: props.next
  }, props.lastStep ? props.finishStepLabel || 'Finish' : props.nextStepLabel || 'Next'));
}

let _$2 = t => t,
    _t$2,
    _t2$2;
const WizardContainer = styled.div(_t$2 || (_t$2 = _$2`
  flex-direction: column;
  height: 100%;
  display: flex;
`));
const StepContainer = styled.div(_t2$2 || (_t2$2 = _$2`
  flex: 1;
`));

function Wizard(props) {
  const [currentStep, setCurrentStep] = useState(props.initialStep || 0);

  const getPropsBag = () => ({
    currentStep,
    countSteps: React.Children.count(props.children),
    next: next,
    previous: previous,
    goToStep: goToStep,
    lastStep: isLastStep(),
    firstStep: isFirstStep()
  });

  const isLastStep = () => {
    return currentStep === React.Children.count(props.children) - 1;
  };

  const isFirstStep = () => {
    return currentStep === 0;
  };

  const goToStep = step => {
    setCurrentStep(step);
  };

  const next = () => {
    if (isLastStep()) {
      props.onFinish(getPropsBag());
    } else {
      if (props.onNextStep) {
        props.onNextStep(getPropsBag());
      }

      setCurrentStep(prevStep => prevStep + 1);
    }
  };

  const previous = () => {
    if (!isFirstStep()) {
      if (props.onPreviousStep) {
        props.onPreviousStep(getPropsBag());
      }

      setCurrentStep(prevStep => prevStep - 1);
    }
  };

  const renderStatusBar = () => {
    if (props.hideStatusBar) {
      return null;
    }

    if (props.renderStatusBar) {
      return props.renderStatusBar(getPropsBag());
    }

    return React.createElement(Wizard.StatusBar, {
      currentStep: currentStep,
      countSteps: React.Children.count(props.children)
    });
  };

  const renderFooter = () => {
    if (props.hideFooter) {
      return null;
    }

    if (props.renderFooter) {
      return props.renderFooter(getPropsBag());
    }

    return React.createElement(Wizard.Footer, Object.assign({}, getPropsBag(), {
      previousStepLabel: props.previousStepLabel,
      nextStepLabel: props.nextStepLabel,
      finishStepLabel: props.finishStepLabel
    }));
  };

  const {
    renderHeader,
    children
  } = props;
  return React.createElement(WizardContainer, null, renderStatusBar(), React.createElement("div", null, renderHeader(getPropsBag())), React.createElement(StepContainer, null, React.cloneElement(children[currentStep], getPropsBag())), renderFooter());
}

Wizard.StatusBar = props => React.createElement(StatusBar, Object.assign({}, props));

Wizard.Footer = props => React.createElement(Footer, Object.assign({}, props));

Wizard.Step = ({
  render,
  ...props
}) => render ? render(props) : null;

export { Wizard };
//# sourceMappingURL=index.modern.js.map
