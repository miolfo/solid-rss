import { createEffect, createSignal } from "solid-js"
import { getFeedItems } from "../utils/FeedClient"
import { FeedItem } from "../utils/types"
import { fetchData } from "../utils/WebClient"
import FeedEntry from "./FeedEntry"
import Item from "./ui/ItemList/Item"
import ItemList from "./ui/ItemList/ItemList"
import Pagination from "./ui/Pagination/Pagination"

interface FeedListProps {
    feedId: number
}

const FeedList = (props: FeedListProps) => {
    const [feedItems, setFeedItems] = createSignal<FeedItem[]>([])
    const [page, setPage] = createSignal(0)
    
    createEffect(() => {
        fetchData(() => getFeedItems(props.feedId, 8, page()), setFeedItems)
    })

    return (
        <div class="container w-75">
            <ItemList items={feedItems().map((feedItem) => <Item> <FeedEntry feedItem={feedItem}/> </Item>)}/>
            <Pagination currentPage={page} setPage={setPage} />
        </div>
    )
}

export default FeedList