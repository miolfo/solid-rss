import { FeedItem } from "../utils/types"
import LinkIcon from "./ui/icons/LinkIcon"

interface FeedItemProps {
    feedItem: FeedItem
}

const FeedEntry = (props: FeedItemProps) => {
    return (
        <div class="card">
            <div class="card-body">
                {props.feedItem.title}
            </div>
            <div class="card-footer text-muted">
                <div class="row">
                    <div class="col-11">
                        {props.feedItem.pubDate}
                    </div>
                    <div class="col">
                        <LinkIcon link={props.feedItem.link}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedEntry