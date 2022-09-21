import { Feed } from "./types"

export const getAllFeeds = async () : Promise<Feed[]> => {
    return new Promise((resolve, reject) => {
        resolve([])
    })
}