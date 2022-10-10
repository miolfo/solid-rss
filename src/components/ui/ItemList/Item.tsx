import { ParentComponent, ParentProps } from "solid-js"
import styles from './Item.module.scss'

const Item: ParentComponent = (props: ParentProps) => {
    return (
        <li class={styles.item}>
            {props.children}
        </li>
    )
}

export default Item