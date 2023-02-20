import arcodeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import proIcon from '../assets/images/icon-pro.svg';

const plans = [
    {
        name: 'Arcade',
        img: arcodeIcon,
        price: {
            monthly: 9,
            yearly: 90
        }
    },
    {
        name: 'Advanced',
        img: advancedIcon,
        price: {
            monthly: 12,
            yearly: 120
        }
    },
    {
        name: 'Pro',
        img: proIcon,
        price: {
            monthly: 15,
            yearly: 150
        }
    }
]

export default plans;