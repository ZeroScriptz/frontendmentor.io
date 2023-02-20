import FormPersonal from '../components/forms/FormPersonal';
import FormPlan from '../components/forms/FormPlan';
import FormAddons from '../components/forms/FormAddons';
import FormSummary from '../components/forms/FormSummary';

const forms = [
    {
        component: <FormPersonal />,
        text: 'Your Information'
    },
    {
        component: <FormPlan />,
        text: 'Select your Plan'
    },
    {
        component: <FormAddons />,
        text: 'Your Add-ons'
    },
    {
        component: <FormSummary />,
        text: 'Your Summary'
    }
]

export default forms;