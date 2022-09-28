export const fetchData = <T>(fn: () => Promise<T>, setData: (data: T) => void) => {
    fn().then(data => {setData(data)})
}

export const rssGet = (url: string) => {
    return fetch(url,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-KEY': localStorage.getItem("apiKey") ?? ''
        }
    })
}

export const testApiKey = (apiKey: string): Promise<boolean> => {

    return fetch("/api/v1/feed/", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'API-KEY': apiKey
        }
    }).then((res) => res.ok)
}