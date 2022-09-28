import { createSignal, JSX, Setter, Show } from "solid-js"
import { testApiKey } from "../utils/WebClient"
import Card from "./ui/Card/Card"
import Input from "./ui/Input/Input"

interface ApiKeyHandlerProps {
    children: JSX.Element
}

interface ApiKeyInputProps {
    setApiKey: Setter<string>
}

const ApiKeyInput = (props: ApiKeyInputProps) => {

    const [apiKeyInput, setApiKeyInput] = createSignal('')
    const [submitDisabled, setSubmitDisabled] = createSignal(false)

    const saveKey = () => {
        setSubmitDisabled(true)
        testApiKey(apiKeyInput())
        .then((ok) => {
            if(ok) {
                localStorage.setItem('apiKey', apiKeyInput())
                props.setApiKey(apiKeyInput())
            } else {
                setSubmitDisabled(false)
                console.error("Invalid Api key")
                //TODO: Show error toast or error message
            }
        })

    }

    return(
        <div class="d-flex mt-5">
            <div class="mx-auto">
                <Card title="Insert api key" cardText="Insert your api key in order to authenticate as a user and access the backend api">
                    <div class="form-group">
                        <Input placeholder="Enter api key" onInput={setApiKeyInput} value={apiKeyInput}/>
                        <button type="submit" disabled={submitDisabled()} class="btn btn-primary mt-1" onClick={saveKey}>Save</button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

const ApiKeyHandler = (props: ApiKeyHandlerProps) => {
    const [apiKey, setApiKey] = createSignal<string | null>(localStorage.getItem('apiKey'))

    return (
        <Show when={apiKey()} fallback={<ApiKeyInput setApiKey={setApiKey}/>}>
            {props.children}
        </Show>
    )
}

export default ApiKeyHandler