import { Link } from "@solidjs/router"
import { createEffect, createSignal, For, JSX } from "solid-js"
import PencilIcon from "../icons/PencilIcon"


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
    //TODO: Maybe pass nav-item content as a prop for potential reusability? If component is needed elsewhere at some point
    return (
        <div class="container w-75">
            <ul class="nav nav-tabs mt-3 mb-3">
                <For each={props.tabs}>{(tab) =>
                    <li class="nav-item">
                        <Link class={`nav-link ${tab.id === active() ? 'active' : ''}`} href={`/feed/${tab.id}`}>
                            {tab.label}
                            <span style={{"margin-left": "1em"}}>
                                <Link href={`/feed/${tab.id}/settings`}>
                                    <PencilIcon />
                                </Link>
                            </span>
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