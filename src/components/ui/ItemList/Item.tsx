import { JSX } from "solid-js/jsx-runtime"
import styles from './Item.module.scss'
interface ItemProps {
    children: JSX.Element
}

const Item = (props: ItemProps) => {
    return (
        <li class={styles.item}>
            {props.children}
        </li>
    )
}

export default Item