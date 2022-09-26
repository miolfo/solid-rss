import { createSignal, For } from "solid-js"
import { getFeedItems } from "../utils/FeedClient"
import { FeedItem } from "../utils/types"
import { fetchData } from "../utils/WebClient"
import FeedEntry from "./FeedEntry"

interface FeedListProps {
    feedId: number
}

const FeedList = (props: FeedListProps) => {
    const [feedItems, setFeedItems] = createSignal<FeedItem[]>([])

    fetchData(() => getFeedItems(props.feedId, 25, 0), setFeedItems)

    return (
        <For each={feedItems()}>
            {(item) => <FeedEntry feedItem={item} />}
        </For>
    )
}

export default FeedList