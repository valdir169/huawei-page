import '../styles/buttons.css'

export function Button({ text, className }) {

    return (
        <>
            <button className={className}>
                {text}
            </button>
        </>
    )
}