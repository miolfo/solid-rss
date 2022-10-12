import { useSearchParams } from "@solidjs/router";
import { Component } from "solid-js"

const FeedSettings: Component = () => {
    const [searchParams] = useSearchParams()
    const id = Number(searchParams.id)
    return (
        <div>
            Single feeds settings, or new feed settings {id}
        </div>
    )
}

export default FeedSettings