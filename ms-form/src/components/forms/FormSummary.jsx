import { useContext } from "react";

import { FormContext } from "../../context/FormContext";
import { StepContext } from "../../context/StepContext";
import FormHeader from '../ui/FormHeader';
import plans from '../../data/plans';

export default function FormSummary() {
    const { state } = useContext(FormContext);
    const {dispatchStep} = useContext(StepContext);

    const termSlug = state.isYearly ? 'yr' : 'mo'
    const currentPlan = plans.find(plan => plan.name === state.plan)
    const planPrice = state.isYearly ? currentPlan.price.yearly : currentPlan.price.monthly

    const addons = state.addons.map((addon, index) => (
        <li key={index} className="justify-between mt-3 flex">
            <span>{addon.name}</span>
            <span className="text-denim">
                +{state.isYearly ? addon.price.yearly : addon.price.monthly1}/{termSlug}
            </span>
        </li>
    ))
        const addonsPrice = state.addons.reduce((result, currentAddon) => {
            return result + (state.isYearly? currentAddon.price.yearly : currentAddon.price.monthly)
        }, 0)
        const totalPrice = addonsPrice + planPrice
        const hasAddons = state.addons.length > 0
        function goToSelectPlan(){
            dispatchStep({
                type: 'GO_TO',
                payload: { to : 2 }
            })
        }

        return (
            <div className="flex-col flex">
                <FormHeader title="Finishing Up!" text="Double-check everything to make sure it looks Okay before finishing." />
                    <div className="text-body-m p-4 bg-very-light-gray rounded-large">
                        <div className="justify-between items-center flex">
                            <div>
                                <div className="font-medium">Arcade ({state.isYearly ? 'Yearly' : 'Monthly'})</div>
                                    <button
                                    type="button"
                                    onClick={goToSelectPlan}
                                    className="underline text-gray hover:text-purple transition-colors"
                                    >
                                        Change
                                    </button>
                            </div>
                            <span className="font-bold">
                                ${planPrice}/{termSlug}
                            </span>
                        </div>
                        {hasAddons && <ul className="border-t-gray border-t-[1px] text-gray mt-3">{addons}</ul>}
                    </div>
                    <div className="flex mt-6 mx-4 justify-between">
                            <span className="text-body-m text-gray">
                                Total (per {state.isYearly ? 'year' : 'month'})
                            </span>
                            <span className="font-bold text-purple">
                                ${totalPrice}/{termSlug}
                            </span>
                    </div>
            </div>
        )
}
