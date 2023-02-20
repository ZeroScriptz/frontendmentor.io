import Addon from '../ui/Addon';
import addOns from '../../data/add-ons';
import FormHeader from '../ui/FormHeader';

export default  function FormAddons() {
    const addonSelector = addOns.map((addon, index) => <Addon key={index} item={addon} />);

    return (
        <div className='flex-col flex'>
            <FormHeader title="Pick Your Addons" text="Addons will help enhance your gaming experience!" />
            {addonSelector}
        </div>
    )

}