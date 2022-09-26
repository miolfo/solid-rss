import { createSignal, For } from "solid-js"
import { getFeedItems } from "../utils/FeedClient"
import { FeedItem } from "../utils/types"
import { fetchData } from "../utils/WebClient"
import FeedEntry from "./FeedEntry"
import Item from "./ui/ItemList/Item"
import ItemList from "./ui/ItemList/ItemList"

interface FeedListProps {
    feedId: number
}

const FeedList = (props: FeedListProps) => {
    const [feedItems, setFeedItems] = createSignal<FeedItem[]>([])

    fetchData(() => getFeedItems(props.feedId, 25, 0), setFeedItems)

    return (
        <div class="container w-75">
            <ItemList items={feedItems().map((feedItem) => <Item> <FeedEntry feedItem={feedItem}/> </Item>)}/>
        </div>
    )
}

export default FeedList