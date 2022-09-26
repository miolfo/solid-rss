import { Link } from "@solidjs/router"
import { createEffect, createSignal, For, JSX } from "solid-js"


interface TabProps {
    label: string
    id: number
    content: JSX.Element
}

interface TabsParams {
    tabs: TabProps[],
    active: number
}

const Tabs = (props: TabsParams) => {

    const [active, setActive] = createSignal<number | undefined>(undefined)
    createEffect(() => {
        setActive(Number(props.active))
    })
    //TODO: Link url as prop to maintain reusability for tabs!
    return (
        <div class="container w-75">
            <ul class="nav nav-tabs mt-3 mb-3">
                <For each={props.tabs}>{(item) =>
                    <li class="nav-item">
                        <Link class={`nav-link ${item.id === active() ? 'active' : ''}`} href={`/feed/${item.id}`}>
                            {item.label}
                        </Link>
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