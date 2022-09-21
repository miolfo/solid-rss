import { Feed } from "./types"

export const getAllFeeds = async () : Promise<Feed[]> => {
    return new Promise((resolve, reject) => {
        // Return mock data for now
        resolve([
            {id: 1, name: 'Animals'},
            {id: 2, name: 'Reddit'},
            {id: 3, name: 'Chess stuff'},
            {id: 4, name: 'Yle'},
            {id: 5, name: 'Hesari'}])
        })
}