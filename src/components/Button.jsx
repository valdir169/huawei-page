import '../styles/buttons.css'

export function Button({ text, className }) {

    return (
        <>
            <a className={className}>
                {text}
            </a>
        </>
    )
}