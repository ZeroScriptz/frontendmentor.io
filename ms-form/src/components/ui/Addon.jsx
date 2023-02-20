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
        className={`flex items`}
        >

        </label>
    )
}