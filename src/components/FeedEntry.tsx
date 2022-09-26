import { FeedItem } from "../utils/types"

interface FeedItemProps {
    feedItem: FeedItem
}

const FeedEntry = (props: FeedItemProps) => {
    return (
        <div>
            {props.feedItem.link}
        </div>
    )
}

export default FeedEntry