import { For } from "solid-js"

interface Tab {
    label: string,
    id: number
}

interface TabsParams {
    tabs: Tab[]
}

const Tabs = (props: TabsParams) => {

    return (
        <For each={props.tabs}>{(item, index) => 
            <h3>{item.label}</h3>
        }
        </For>
    )
}

export default Tabs