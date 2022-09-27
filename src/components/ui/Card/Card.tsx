import { JSX, Show } from "solid-js"

interface CardProps {
    title?: string
    cardText?: string
    children?: JSX.Element
}

const Card = (props: CardProps) => {
    return (
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <Show when={props.title}>
                    <h5 class="card-title">{props.title}</h5>
                </Show>
                <Show when={props.cardText}>
                    <p class="card-text">{props.cardText}</p>
                </Show>
                {props.children}
            </div>
        </div>
    )
}

export default Card