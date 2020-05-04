import React from 'react'
import { Wizard, WizardHeader } from 'react-wizard'

const App = () => {
  const ref = React.useRef(null)
  return (
    <Wizard ref={ref} initialStep={0} renderHeader={({ currentStep }) => <WizardHeader currentStep={currentStep} />}>
      <Wizard.Step
        render={({ currentStep, next, previous, firstStep, lastStep }) => (
          <div>
            <div>Step 1</div>
            <button onClick={() => previous()}>Previous</button>
            <button onClick={() => next()}>Next</button>
          </div>
        )}
      />
      <Wizard.Step
        render={({ currentStep, next, previous, firstStep, lastStep }) => (
          <div>
            <div>Step 2</div>
            <button onClick={() => previous()}>Previous</button>
            <button onClick={() => next()}>Next</button>
          </div>
        )}
      />
      <Wizard.Step
        render={({ currentStep, next, previous, firstStep, lastStep }) => (
          <div>
            <div>Step 3</div>
            <button onClick={() => previous()}>Previous</button>
            <button onClick={() => next()}>Next</button>
          </div>
        )}
      />
    </Wizard>
  )
}

export default App
