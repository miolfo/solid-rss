interface FeedListProps {
    feedId: number
}

const FeedList = (props: FeedListProps) => {
    return (
        <div>
            {props.feedId}
        </div>
    )
}

export default FeedList