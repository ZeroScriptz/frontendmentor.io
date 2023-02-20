import { useContext, useState, useEffect } from "react";
import { FormContext } from '../../context/FormContext';
import Input from '../ui/Input';
import FormHeader from '../ui/FormHeader';
import validationForm from '../../utils/validationForm';
import inputs from "../../data/inputs";

export default function FormPersonal() {
    const {state, dispatch} = useContext(FormContext)
    const intialErrors = {}
    inputs.forEach(input => {
        intialErrors[input.name] = {
            isError: !state[input.name].match(validationForm[input.type]),
            isShown: false
        }
    })
    
    const [errors, setErrors] = useState(intialErrors)

    const inputElements = inputs.map(input => (
        <Input 
        key={input.name} 
        type={input.type} 
        value={state[input.name]} 
        onChange={handleChange}
        label={input.label}
        name={input.name}
        placeholder={input.placeholder}
        isError={errors[input.name].isError && errors[input.name].isShown}
        onBlur={handleBlur}
        />
    ))
    useEffect(() => {
        const isValidationError = Object.values(errors).some(value => value.isError)
        dispatch({ type: 'SET_VALUDATION', isValidationError })
        
    },
    Object.values(errors).map(value => value.isError)
    )
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({ type: 'HANDLE_CHANGE', name, value })
    }
    function handleBlur(e) {
        const { value, type, name } = e.target;

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: {
                isError: !value.match(validationForm[type]),
                isShown: true
            }
        }))
    }
    return (
        <div className="flex-col flex">
            <FormHeader title="Select your plan" text="You have the option of Monthly or Yearly billing." />
            <div className="flex-col flex gap-4 dekstop:gap-6">{inputElements}</div>
        </div>
    )
}