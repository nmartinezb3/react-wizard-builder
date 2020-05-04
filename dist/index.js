function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-bottom: 15px;\n  background-color: #efeef5;\n  border-radius: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 6px;\n  background-color: #4ca1ff;\n  transition: width 0.2s;\n  width: ", "%;\n  border-radius: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StatusBarProgress = styled__default.div(_templateObject(), function (props) {
  return 100 / props.countSteps * (props.currentStep + 1);
});
var StatusBarContainer = styled__default.div(_templateObject2());
var StatusBar = function StatusBar(props) {
  return React__default.createElement(StatusBarContainer, {
    className: props.statusBarClassName
  }, React__default.createElement(StatusBarProgress, {
    className: props.statusBarProgressClassName,
    countSteps: props.countSteps,
    currentStep: props.currentStep
  }));
};

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n      cursor: not-allowed;\n      opacity: 0.5;\n      background-color: #ffffff;\n      border: 1px solid #eeeeee;\n      color: #0080de;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n  cursor: pointer;\n  outline: none;\n  color: white;\n  background: #0080de;\n  border: 1px solid #0080de;\n  border-radius: 4px;\n  font-family: 'Lato', sans-serif;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n  font-size: 14px;\n  height: 40px;\n  text-transform: uppercase;\n  width: 100%;\n  -webkit-transition: all 0.25s;\n  transition: all 0.25s;\n  font-weight: bold;\n  max-width: 110px;\n  ", ";\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n  margin: 15px 0;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var ButtonContainer = styled__default.div(_templateObject$1());
var Button = styled__default.button(_templateObject2$1(), function (props) {
  return props.disabled && styled.css(_templateObject3());
});
function Footer(props) {
  return React__default.createElement(ButtonContainer, {
    className: props.className
  }, React__default.createElement(Button, {
    onClick: props.previous,
    disabled: props.firstStep
  }, props.previousStepLabel || 'Previous'), React__default.createElement(Button, {
    onClick: props.next
  }, props.lastStep ? props.finishStepLabel || 'Finish' : props.nextStepLabel || 'Next'));
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var WizardContainer = styled__default.div(_templateObject$2());
var StepContainer = styled__default.div(_templateObject2$2());

function Wizard(props) {
  var _useState = React.useState(props.initialStep || 0),
      currentStep = _useState[0],
      setCurrentStep = _useState[1];

  var getToolset = function getToolset() {
    return {
      currentStep: currentStep,
      countSteps: React__default.Children.count(props.children),
      next: next,
      previous: previous,
      goToStep: goToStep,
      lastStep: isLastStep(),
      firstStep: isFirstStep()
    };
  };

  var isLastStep = function isLastStep() {
    return currentStep === React__default.Children.count(props.children) - 1;
  };

  var isFirstStep = function isFirstStep() {
    return currentStep === 0;
  };

  var goToStep = function goToStep(step) {
    setCurrentStep(step);
  };

  var next = function next() {
    if (isLastStep()) {
      props.onFinish(getToolset());
    } else {
      if (props.onNextStep) {
        props.onNextStep(getToolset());
      }

      setCurrentStep(function (prevStep) {
        return prevStep + 1;
      });
    }
  };

  var previous = function previous() {
    if (!isFirstStep()) {
      if (props.onPreviousStep) {
        props.onPreviousStep(getToolset());
      }

      setCurrentStep(function (prevStep) {
        return prevStep - 1;
      });
    }
  };

  var renderStatusBar = function renderStatusBar() {
    if (props.hideStatusBar) {
      return null;
    }

    if (props.renderStatusBar) {
      return props.renderStatusBar(getToolset());
    }

    return React__default.createElement(Wizard.StatusBar, {
      statusBarClassName: props.statusBarClassName,
      statusBarProgressClassName: props.statusBarProgressClassName,
      currentStep: currentStep,
      countSteps: React__default.Children.count(props.children)
    });
  };

  var renderFooter = function renderFooter() {
    if (props.hideFooter) {
      return null;
    }

    if (props.renderFooter) {
      return props.renderFooter(getToolset());
    }

    return React__default.createElement(Wizard.Footer, Object.assign({
      className: props.footerClassName
    }, getToolset(), {
      previousStepLabel: props.previousStepLabel,
      nextStepLabel: props.nextStepLabel,
      finishStepLabel: props.finishStepLabel
    }));
  };

  var renderHeader = props.renderHeader,
      children = props.children;
  return React__default.createElement(WizardContainer, {
    className: props.className
  }, renderStatusBar(), renderHeader(getToolset()), React__default.createElement(StepContainer, null, React__default.cloneElement(children[currentStep], getToolset())), renderFooter());
}
Wizard.StatusBar = StatusBar;
Wizard.Footer = Footer;

Wizard.Step = function (_ref) {
  var render = _ref.render,
      props = _objectWithoutPropertiesLoose(_ref, ["render"]);

  return render ? render(props) : null;
};

exports.Wizard = Wizard;
//# sourceMappingURL=index.js.map
