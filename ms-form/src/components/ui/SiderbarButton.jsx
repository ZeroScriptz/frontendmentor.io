export default function SidebarButton(props) {
    const additionalClass = props.selected ? 'bg-sky-blue border-sky-blue text-denim' : ''
    return (
        <div className="flex items-center">
            <button
            className={`border-2 w-[33px] h-[33px] rounded-full transition-all ${additionalClass}`}
            onClick={props.onClick}
            disabled={props.disabled}
            >
                {props.value}
            </button>
            <div className="hidden uppercase desktop:block desktop:ml-4">
                <div className="text-body-s text-light-blue font-normal">
                    Step {props.value}
                    <div>
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    )
}