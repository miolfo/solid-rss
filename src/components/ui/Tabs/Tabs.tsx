import { createSignal, For, JSX } from "solid-js"


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
        <div class="container w-75">
            <ul class="nav nav-tabs mt-3 mb-3">
                <For each={props.tabs}>{(item) =>
                    <li class="nav-item">
                        <a onclick={() => onClickTab(item.id)} class={`nav-link ${item.id === active() ? 'active' : ''}`} href="#">{item.label}</a>
                    </li>
                }
                </For>
            </ul>
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
        </div>
    )
}

export default Tabs