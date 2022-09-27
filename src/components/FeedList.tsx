import { useSearchParams } from "@solidjs/router"
import { createEffect, createSignal, Setter } from "solid-js"
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
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = createSignal(searchParams.page ? Number(searchParams.page) - 1 : 0)

    const setPageAndParam = (val: number) => {
        setSearchParams({page: val + 1})
        setPage(val)
    }
    
    createEffect(() => {
        fetchData(() => getFeedItems(props.feedId, 8, page()), setFeedItems)
    })

    return (
        <div class="container w-75">
            <ItemList items={feedItems().map((feedItem) => <Item> <FeedEntry feedItem={feedItem}/> </Item>)}/>
            <Pagination currentPage={page} setPage={setPageAndParam} />
        </div>
    )
}

export default FeedList