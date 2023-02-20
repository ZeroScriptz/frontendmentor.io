import { useContext } from "react";
import { FormContext } from '../../context/FormContext';

export default function Addon( { item } ) {
    const {state, dispatch} = useContext(FormContext);
    const isAdded = state.addons.some(addon => addon.id === item.name);
    const addonPrices = state.isYearly ? item.prices.yearly : item.prices.monthly;
    const termSlug = state.isYearly ? 'yr' : 'mo';

    function handleChange(e) {
        const { checked } = e.target
        dispatch({
            type: checked? 'ADD_ADDON' : 'REMOVE_ADDON',
            addon: item
        })
    }
    return (
        <label
        className={`flex items-center transition-all px-4 cursor-pointer py-3 rounded-large 
        border-light-gray border-[1px] mb-3 peer-checked:bg-very-light-gray peer-checked:border-purple
         text-body-s ${ isAdded ? 'bg-very-light-gray border-purple' : '' }`}
        >
            <input
            type="checkbox"
            checked={isAdded}
            onChange={handleChange}
            className="checked:border-purple appearance-none cursor-pointer transition-colors w-[20px] h-[20px] border-light-gray border-[1px] rounded-small focus:border-purple checked:bg-purple checked:bg-checkmark checked:bg-no-repeat checked:bg-center shrink-0"
            />
            <div className="flex flex-col justify-between ml-[0.875rem]">
                <h5 className="text-body-m font-medium">{item.name}</h5>
                <p className="text-body-m text-gray">{item.description}</p>
            </div>
            <span className="text-purple ml-auto">
                +${addonPrices}/{termSlug}
            </span>
        </label>
    )
}