import React from 'react'
import { Wizard } from 'react-wizard'
import Header from './Header'

const App = () => {
  return (
    <div className='app-container'>
      <div className='white-card'>
        <Wizard
          className='my-wizard'
          footerClassName='my-footer'
          statusBarClassName='my-status-bar'
          statusBarProgressClassName='my-progress'
          initialStep={0}
          renderHeader={(props) => <Header {...props} />}
          onNextStep={({ currentStep }) => console.log('On next step ' + currentStep)}
          onPreviousStep={({ currentStep }) => console.log('On previous step ' + currentStep)}
          onFinish={() => console.log('Wizard finished!')}
        >
          <Wizard.Step
            render={({ currentStep, next, previous, firstStep, lastStep }) => (
              <div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. A erat nam at lectus urna duis convallis convallis. Turpis massa sed elementum
                  tempus egestas sed. Sapien eget mi proin sed libero enim sed faucibus. Amet luctus venenatis lectus
                  magna. Egestas dui id ornare arcu odio ut. Nisi vitae suscipit tellus mauris a. Rhoncus est
                  pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Dui faucibus in ornare quam viverra
                  orci sagittis. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Integer malesuada nunc
                  vel risus. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Aliquam etiam erat velit
                  scelerisque. Lorem ipsum dolor sit amet consectetur. Scelerisque purus semper eget duis at tellus at
                  urna condimentum.
                </div>
              </div>
            )}
          />
          <Wizard.Step
            render={({ currentStep, next, previous, firstStep, lastStep }) => (
              <div>
                <div>
                  Quis vel eros donec ac odio tempor orci dapibus. Consectetur libero id faucibus nisl tincidunt eget
                  nullam non. Ultricies leo integer malesuada nunc vel. Ridiculus mus mauris vitae ultricies leo. Lectus
                  proin nibh nisl condimentum id venenatis a condimentum. Arcu vitae elementum curabitur vitae nunc sed
                  velit dignissim sodales. Volutpat consequat mauris nunc congue nisi. Nullam eget felis eget nunc.
                  Tincidunt vitae semper quis lectus nulla at. Velit scelerisque in dictum non. Amet luctus venenatis
                  lectus magna fringilla. Amet risus nullam eget felis eget nunc lobortis mattis.
                </div>
              </div>
            )}
          />
          <Wizard.Step
            render={({ currentStep, next, previous, firstStep, lastStep }) => (
              <div>
                <div>
                  Volutpat blandit aliquam etiam erat velit. Quis commodo odio aenean sed adipiscing diam donec. Diam
                  phasellus vestibulum lorem sed. Volutpat commodo sed egestas egestas fringilla phasellus faucibus
                  scelerisque. Tellus mauris a diam maecenas sed enim ut sem viverra. Amet consectetur adipiscing elit
                  ut aliquam purus sit. Massa tincidunt dui ut ornare lectus sit amet est. Mi proin sed libero enim.
                  Varius morbi enim nunc faucibus. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Id
                  leo in vitae turpis massa sed elementum tempus egestas. Est pellentesque elit ullamcorper dignissim
                  cras tincidunt lobortis feugiat vivamus. Nullam eget felis eget nunc. Pharetra massa massa ultricies
                  mi quis hendrerit dolor magna eget. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet
                  dui. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit.
                </div>
              </div>
            )}
          />
          <Wizard.Step
            render={({ currentStep, next, previous, firstStep, lastStep }) => (
              <div>
                <div>
                  Nec ultrices dui sapien eget mi. Lorem dolor sed viverra ipsum nunc aliquet. Proin sagittis nisl
                  rhoncus mattis. Duis at tellus at urna condimentum mattis. Diam donec adipiscing tristique risus nec
                  feugiat in fermentum. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Orci eu
                  lobortis elementum nibh tellus. Sit amet nisl suscipit adipiscing bibendum est. Sit amet mattis
                  vulputate enim. Dignissim diam quis enim lobortis. Scelerisque eleifend donec pretium vulputate sapien
                  nec sagittis aliquam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis.
                  Molestie nunc non blandit massa enim nec. Id interdum velit laoreet id donec ultrices.
                </div>
              </div>
            )}
          />
          <Wizard.Step
            render={({ currentStep, next, previous, firstStep, lastStep }) => (
              <div>
                <div>
                  Amet mauris commodo quis imperdiet massa. Tincidunt vitae semper quis lectus nulla at volutpat diam
                  ut. Porttitor leo a diam sollicitudin tempor id eu. Vitae ultricies leo integer malesuada. Amet
                  commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Libero volutpat sed cras ornare arcu dui.
                  Lectus mauris ultrices eros in cursus. Nec feugiat in fermentum posuere urna nec tincidunt praesent
                  semper. Pellentesque eu tincidunt tortor aliquam. Sollicitudin tempor id eu nisl nunc mi ipsum
                  faucibus vitae. Semper quis lectus nulla at.
                </div>
              </div>
            )}
          />
        </Wizard>
      </div>
    </div>
  )
}

export default App
