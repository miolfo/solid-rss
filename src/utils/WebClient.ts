export const fetchData = <T>(fn: () => Promise<T>, setData: (data: T) => void) => {
    fn().then(data => {setData(data)})
}

export const rssGet = (url: string) => {
    //TODO: Api key should be stored somewhere in local storage so user has to set it manually
    return fetch(url,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-KEY': import.meta.env.VITE_API_KEY
        }
    })
}