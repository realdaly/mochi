import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    
    useEffect(() => {
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(json => {
            setData(json)
        })
        .catch(error => {
            console.log(error)
        })
    }, [url])

    return {data}
}

export default useFetch