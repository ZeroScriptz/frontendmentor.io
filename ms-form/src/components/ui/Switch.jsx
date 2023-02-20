export default function Switch(props) {
    return (
        <label className="relative inline-block w-[38px] h-[20px] mx-6" aria-label="Monthly or yearly">
            <input 
            name={props.name}
            checked={props.checked}
            onChange={props.toggle}
            type="checkbox"
            className="sr-only peer"
            />
            <span className="absolute inset-0 cursor-pointer bg-denim rounded-[10px] before:absolute before:content-[''] before:h-[14px] before:rounded-full before:left-[4px] before:bottom-[3px] border:bg-white peer-focus-visible:bg-violet-500 peer-checked:before:translate-x-[16px] before:transition-all"></span>
        </label>
    )
}