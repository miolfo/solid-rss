import { For } from "solid-js"
import styles from './Tabs.module.scss'


interface Tab {
    label: string,
    id: number
}

interface TabsParams {
    tabs: Tab[]
}

const Tabs = (props: TabsParams) => {

    return (
        <div class={styles.tabsContainer}>
            <For each={props.tabs}>{(item, index) => 
                <button class="btn btn-default">{item.label}</button>
            }
            </For>
        </div>
    )
}

export default Tabs