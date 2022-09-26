import { JSX } from "solid-js/jsx-runtime"

interface TabProps {
    children?: JSX.Element
}

const Tab = (props: TabProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Tab