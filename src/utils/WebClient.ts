export const fetchData = <T>(fn: () => Promise<T>, setData: (data: T) => void) => {
    fn().then(data => {setData(data)})
}