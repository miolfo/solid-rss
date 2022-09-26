import { Feed, FeedItem } from "./types"
import { rssGet } from "./WebClient";

export const getAllFeeds = async (): Promise<Feed[]> => {
    return rssGet("/api/v1/feed/")
        .then((res) => {
            return res.json();
        }).then((json) => {
            return json
        })
}

export const getFeedItems = async (feedId: number, count: number, page: number): Promise<FeedItem[]> => {
    return rssGet(`/api/v1/feed/${feedId}/items/?page=${page}&count=${count}`)
        .then((res) => {
            return res.json();
        }).then((json) => {
            return json
        })
}