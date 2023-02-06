
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  const formArray = [1, 2, 3, 4]
  const [formNo, setFormNo] = useState(formArray[0])
  const [state, setState] = useState({
    name: '',
    email: '',
    phnum: '',
    plans: '',
    addons: '',
    smry: '',
  })
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.name
    })
  }
  const next = () => {
    if (formNo === 1 && state.name && state.email && state.phnum) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 2 && state.plans ) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 3 && state.addons) {
      setFormNo(formNo + 1)
    } else {
      toast.error('Please fill in forms')
      console.log("Something went wrong")
    }
    }
    const pre = () => {
      setFormNo(formNo - 1)
    }
    const finalSubmit = () => {
      if (state.name && state.email && state.phnum && state.plans && state.addons) {
        toast.success('Success this was submitted!')
      } else {
        toast.error('Please fill in all forms!')
      }
    }

  return (
    
  <div className=' w-[750px] rounded-md shadow-md bg-white p-5' >
    
  <div>
      {
        formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
        {v}
      </div></>)}
    </div>
     
    {
      formNo === 1 && <div>
      <div className='flex flex-col mb-2'> 
          <label htmlFor='name'> Name : </label> 
           <input onChange={inputHandle} type="text" name="name" placeholder='name' id='name' className="p-2 border border-slate-400 mt-1" />
        </div>
          <div>
          <label htmlFor='email'>Email : </label>
          <input onChange={inputHandle} name="email" type="email" placeholder='email' id='email' className='p-2 border border-slate-400 mt-1' />
          </div>
          <div>
            <label htmlFor='phnum'>Phone Number : </label>
            <input onChange={inputHandle}   name="phnum" type="text" placeholder="Phone number" id='phnum' className='p-2 border border-slate-400 mt-1' />
            </div>
      <div className=''>
        <button onClick={next} className="rounded-md w-full text-white bg-blue-800">Next</button>
      </div>

  </div>
    }
    {
      formNo === 2 && <div> 
            <div className='flex flex-col mb-2'> 
              <label htmlFor='plans'>Plans </label>
              <button>Arcade</button>
            </div>

      </div>
    }

    {
      formNo === 3 && <div>
        <label htmlFor='addons'>Addons </label>
        
        </div>

    }

    {
      formNo === 4 && <div>
        <label htmlFor='smry'>Summary </label>

        </div>
    }


  </div>
  )
}

export default App
