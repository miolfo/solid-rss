import { createSignal, For } from "solid-js"
import styles from './Tabs.module.scss'


interface Tab {
    label: string,
    id: number
}

interface TabsParams {
    tabs: Tab[]
}

const Tabs = (props: TabsParams) => {

    const [active, setActive] = createSignal<number | undefined>(undefined)

    const onClickTab = (id: number) => {
        setActive(id === active() ? undefined : id)
    }

    return (
        <div class={styles.tabsContainer}>
            <For each={props.tabs}>{(item, index) => 
                <button 
                    onclick={() => onClickTab(item.id)} 
                    class={`btn btn-default ${item.id === active() ? 'active' : ''}`}>
                        {item.label}
                    </button>
            }
            </For>
        </div>
    )
}

export default Tabs