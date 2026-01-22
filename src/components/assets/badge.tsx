export function Badge({text}: { text: string|number|undefined }) {
    return(
        <span className="badge">
            {text}
        </span>
    )
}