import Tabs from "./ui/Tabs/Tabs"
import { createSignal } from "solid-js";
import { Feed } from "../utils/types";
import { fetchData } from "../utils/WebClient";
import { getAllFeeds } from "../utils/FeedClient";
import FeedList from "./FeedList";
import { useParams } from "@solidjs/router";

const FeedTabs = () => {
    const [tabs, setTabs] = createSignal<Feed[]>([])
    const params = useParams();
    fetchData(getAllFeeds, setTabs)

    return <Tabs active={params.id as unknown as number} tabs={tabs().map((feed) => {
        return { label: feed.name, id: feed.id, content: <FeedList feedId={feed.id}/> }
    })}/>
}

export default FeedTabs