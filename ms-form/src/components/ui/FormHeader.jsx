export default function FormHeader(props) {
    return (
        <>
            <h1 className="desktop:mb-[0.625rem] mb-2 font-bold desktop:text-heading text-heading-mobile">
                {props.title}
            </h1>
            <p className="desktop:mb-10 mb-[1.375rem] text-gray">
                {props.text}
            </p>
        </>
    )
}