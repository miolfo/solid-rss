import { createSignal, For, JSX } from "solid-js"
import styles from './Tabs.module.scss'


interface TabProps {
    label: string
    id: number
    content: JSX.Element
}

interface TabsParams {
    tabs: TabProps[]
}

const Tabs = (props: TabsParams) => {

    const [active, setActive] = createSignal<number | undefined>(undefined)

    const onClickTab = (id: number) => {
        setActive(id === active() ? undefined : id)
    }
    
    return (
        <>
            <div class={styles.tabsContainer}>
                <For each={props.tabs}>{(item) => <button
                    onclick={() => onClickTab(item.id)}
                    class={`btn btn-outline-dark ${item.id === active() ? 'active' : ''}`}>
                    {item.label}
                </button>}
                </For>
            </div>
            <div class="tabContent">
                {() => {
                    const activeId = active()
                    if (activeId) {
                        const activeTab = props.tabs.find((tab) => tab.id === activeId)
                        if(activeTab) {
                            return activeTab.content
                        } else {
                            return <></>
                        }
                    } else {
                        return <></>
                    }
                }}
            </div>
        </>
    )
}

export default Tabs