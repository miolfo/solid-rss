import Tabs from "./ui/Tabs"
import { createSignal } from "solid-js";
import { Feed } from "../utils/types";
import { fetchData } from "../utils/WebClient";
import { getAllFeeds } from "../utils/FeedClient";

const FeedTabs = () => {
    const [tabs, setTabs] = createSignal<Feed[]>([])

    fetchData(getAllFeeds, setTabs)

    return <Tabs tabs={tabs().map((feed) => {
        return { label: feed.name, id: feed.id }
    })}/>
}

export default FeedTabs