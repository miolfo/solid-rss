import { Feed } from "./types"
import { rssGet } from "./WebClient";

export const getAllFeeds = async (): Promise<Feed[]> => {
    return rssGet("/api/v1/feed/")
        .then((res) => {
            return res.json();
        }).then((json) => {
            return json
        })
}