import { useEffect, useState } from "react";

export const useData = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json.users)
            } catch (e) {
                console.log(e);
            }
        };

        fetchData()
    },[url])

    return{
        data
    }
}