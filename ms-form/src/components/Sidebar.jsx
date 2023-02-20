import { useContext } from 'react'
import { StepContext } from '../context/StepContext'
import SidebarButton from './ui/SiderbarButton'
import forms from '../data/forms'
import { FormContext } from '../context/FormContext'

function Sidebar() {
  const { state } = useContext(FormContext)
  const { step, dispatchStep } = useContext(StepContext)

  function goTo(to) {
    dispatchStep({ type: 'GO_TO', payload: { to } })
  }

  const buttons = forms.map((form, index) => (
    <SidebarButton
      key={index}
      value={index + 1}
      selected={step.current === index + 1}
      text={form.text}
      onClick={() => goTo(index + 1)}
      disabled={step.isCompleted || state.isValidationError}
    />
  ))

  return (
    <aside className="bg-purple flex justify-center pt-8 pb-[6.75rem] text-white text-[0.875rem] gap-4 font-bold bg-mobile-sidebar bg-bottom bg-no-repeat bg-cover desktop:w-[274px] desktop:flex-col desktop:justify-start desktop:pt-10 px-6 desktop:rounded-sidebar desktop:bg-desktop-sidebar desktop:gap-8">
      {buttons}
    </aside>
  )
}

export default Sidebar