import { For, JSX } from "solid-js"

interface ItemListProps {
    items: JSX.Element[]
}

const ItemList = (props: ItemListProps) => {
    return(
        <ul class="list-group list-group-flush">
            <For each={props.items}>
                {(item) => item}
            </For>
        </ul>
    )    
}

export default ItemList