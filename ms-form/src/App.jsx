import { useContext } from 'react'

import Sidebar from './components/Sidebar'
import MainForm from './components/MainForm'
import { FormProvider } from './context/FormContext'
import { StepContext } from './context/StepContext'
import forms from './data/forms'

function App() {
  const { step } = useContext(StepContext)

  return (
    <div className="flex flex-col desktop:flex-row desktop:bg-white desktop:mx-auto desktop:py-4 desktop:pl-4 desktop:rounded-main">
      <FormProvider>
        <Sidebar />
        <MainForm>{forms[step.current - 1].component}</MainForm>
      </FormProvider>
    </div>
  )
}

export default App