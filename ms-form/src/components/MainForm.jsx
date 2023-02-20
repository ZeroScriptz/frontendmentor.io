import { useContext } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import { StepContext } from '../context/StepContext'
import Buttons from './Buttons'
import ThankMessage from './ThankMessage'

function MainForm(props) {
    const { step } = useContext(StepContext)
    const completionClass = step.isCompleted ? 'justify-center' : 'desktop:justify-between'

    return (
        <main className="px-4 desktop:w-[450px] desktop:mx-[6.25rem] desktop:p-0 desktop:mt-6">
            <form
                className={`bg-white px-6 py-8 rounded-[10px] shadow-form -my-[4.625rem]
         text-denim mb-24 desktop:m-0 desktop:shadow-none desktop:p-0 
         desktop:flex desktop:flex-col desktop:min-h-[528px] desktop:mb-4 ${completionClass}`}
                autoComplete="off"
            >
                <SwitchTransition>
                    <CSSTransition
                        key={step.current}
                        classNames="fade"
                        timeout={400}>
                        {!step.isCompleted ? props.children : <ThankMessage />}
                    </CSSTransition>
                </SwitchTransition>
                <Buttons />
            </form>
        </main>
    )
}

export default MainForm