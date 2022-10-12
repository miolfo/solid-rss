import { useParams } from "@solidjs/router";
import { Component } from "solid-js"

const FeedSettings: Component = () => {
    const id: string | undefined = useParams().id
    let feedId = undefined
    if(id) {
        feedId = Number(id)
    } 
    return (
        <div>
            Single feeds settings, or new feed settings {feedId}
        </div>
    )
}

export default FeedSettings