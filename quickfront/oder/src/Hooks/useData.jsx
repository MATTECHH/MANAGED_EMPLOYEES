import { useEffect, useState } from "react";

export const useData = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch(url);
            const json = await res.json();
            setData(json.users)
        };

        fetchData()
    },[url])

    return{
        data
    }
}