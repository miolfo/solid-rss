export interface Feed {
    id: number,
    name: string,
    lastUpdated?: string
}

export interface FeedItem {
    title: string,
    description: string,
    link: string
    pubDate: string
}