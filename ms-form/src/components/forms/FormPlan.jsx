import { useContext } from "react";
import { FormContext } from '../../context/FormContext';
import PlanSelect from '../ui/Plan';
import FormHeader from '../ui/FormHeader';
import Switch from '../ui/Switch';
import plans from '../../data/plans';


export default function PlanForm() {
    const {state, dispatch} = useContext(FormContext);
    const planSelect = plans.map((item, index) => <PlanSelect key={index} item={item} />)

    function handleChange(e) {
        const { name, checked } = e.target;
        dispatch ({ type: 'HANDLE_CHANGE', name, value: checked });
    }

    return (
        <div className="flex-col flex">
            <FormHeader title="Select your Plan" text="You have the option for Monthly or Yearly billing. " />
            <div className="flex-col flex gap-3 desktop:flex-row desktop:gap-[1.125rem]">{planSelect}</div>
                <div className="flex justify-center items-center bg-very-light-gray rounded-large py-[0.875rem] mt-6 desktop:mt-8 font-medium">
                    <span>Monthly</span>
                    <Switch name="isYearly" checked={state.isYearly} toggle={handleChange} /> 
                    <span>Yearly</span>
                </div>
        </div>
    )

}
