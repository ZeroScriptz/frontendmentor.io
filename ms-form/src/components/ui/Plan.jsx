import { useContext } from "react";
import { FormContext } from '../../context/FormContext';

export default function PlanSelector({ item }) {
    const { state, dispatch } = useContext(FormContext);

        function handlePlanChange(e) {
            const { name, type: inputType, value, checked } = e.target;
            dispatch({
            type: 'HANDLE_CHANGE',
            name,
            value: inputType === 'checkbox'? checked : value      
        })
    }
    return (
        <label>
            <input
            type="radio"
            name="plan"
            className="sr-only peer"
            checked={state.plan === item.plan}
            value={item.name}
            onChange={handlePlanChange}
            />
            <div className="rounded-large p-4 border-light-gray transition-all flex border-[1px] peer-checked:bg-very-light-gray cursor-pointer peer-checked:border-purple gap-[0.875rem] desktop:justify-between desktop:flex-col desktop:h-[160px] desktop:w-[138px]">
                <img src={item.img} className="desktop:w-[40px]" alt={`${item.name} plan`} />
                <div className="flex flex-col justify-between">
                    <h5 className="font-medium">
                        {item.name}
                    </h5>
                    <p className="text-gray text-body-m">
                        ${state.isYearly ? item.price.yearly : item.price.monthly}/{state.isYearly ? 'yr' : 'mo'}
                    </p>
                    {state.isYearly && <p className="text-body-s">2 months free!</p>}
                </div>
            </div>
        </label>
    )
}

