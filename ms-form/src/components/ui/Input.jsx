export default function Input({ isError, ...props}) {
    const borderClass = isError ? 'border-red-errors focus:outline-red-errors' : 'border-border'

    return (
        <label className="flex-col flex">
            <div className="desktop:mb-2 mb-[3px] flex justify-between">
                <span>{props.label}</span>
                {isError && <span className="font-bold text-red-errors">This field is required</span>}
            </div>
            <input
            className={`focus:outline-purple border-[1px] desktop:rounded-large rounded-small font-medium px-4 py-3 ${borderClass}`}
            {...props}
            />
        </label>
    )
}