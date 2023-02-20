import iconThank from '../assets/images/icon-thank-you.svg'

export default function ThankMessage() {
    return (
        <div className='flex flex-col items-center text-center'>
            <img src={iconThank} alt="Thank you Icon" />
            <h2 className='text-[1.5rem] desktop:heading font-bold mt-6 dekstop:mt-8 mb-2 desktop:mb-[0.875rem]'>
                Thank you !
            </h2>
        <p className='text-gray'>
            Thank you for confirming the subscription! We hope you enjoy our platform. If you need
            support please contact us at <a href="mailto:test@example.com">support@support.com</a> 
        </p>
        </div>
    )
}