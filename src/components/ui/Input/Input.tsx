import { Accessor, JSX, Setter } from "solid-js"

interface InputProps {
    placeholder: string
    onInput: Setter<string>
    value: Accessor<string>
}

const Input = (props: InputProps) => {

    const onInputInternal = (e: any) => {
        if (e && e.target && e.target.value) {
            props.onInput(e.target.value)
        } else {
            props.onInput('')
        }
    }

    return (
        <input type="text" class="form-control" placeholder={props.placeholder} onInput={onInputInternal} value={props.value()}/>
    )
}

export default Input