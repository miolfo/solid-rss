import Tabs from "./ui/Tabs/Tabs"
import { createSignal } from "solid-js";
import { Feed } from "../utils/types";
import { fetchData } from "../utils/WebClient";
import { getAllFeeds } from "../utils/FeedClient";
import FeedList from "./FeedList";

const FeedTabs = () => {
    const [tabs, setTabs] = createSignal<Feed[]>([])

    fetchData(getAllFeeds, setTabs)

    return <Tabs tabs={tabs().map((feed) => {
        return { label: feed.name, id: feed.id, content: <FeedList feedId={feed.id}/> }
    })}/>
}

export default FeedTabs