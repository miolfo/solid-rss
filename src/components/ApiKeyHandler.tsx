import { createSignal, JSX, Setter, Show } from "solid-js"
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

    const saveKey = () => {
        localStorage.setItem('apiKey', apiKeyInput())
        props.setApiKey(apiKeyInput())
    }

    return(
        <div class="d-flex mt-5">
            <div class="mx-auto">
                <Card title="Insert api key" cardText="Insert your api key in order to authenticate as a user and access the backend api">
                    <div class="form-group">
                        <Input placeholder="Enter api key" onInput={setApiKeyInput} value={apiKeyInput}/>
                        <button type="submit" class="btn btn-primary mt-1" onClick={saveKey}>Save</button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

const ApiKeyHandler = (props: ApiKeyHandlerProps) => {
    const [apiKey, setApiKey] = createSignal<string | undefined>(undefined)

    return (
        <Show when={apiKey()} fallback={<ApiKeyInput setApiKey={setApiKey}/>}>
            {props.children}
        </Show>
    )
}

export default ApiKeyHandler