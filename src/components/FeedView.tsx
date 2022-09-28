import { Link } from "@solidjs/router"
import FeedTabs from "./FeedTabs"
import GearIcon from "./ui/icons/GearIcon"

const FeedView = () => {
    return (
        <div>
            <div style={{float: "right", "margin-right": "1em"}}>
                <Link href="/settings">
                    <GearIcon />
                </Link>
            </div>
            <FeedTabs />
        </div>
    )
}

export default FeedView