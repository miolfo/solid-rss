export const fetchData = <T>(fn: () => Promise<T>, setData: (data: T) => void) => {
    console.log('fetching data')
    fn().then(data => {
        console.log(data)
        setData(data)})
}