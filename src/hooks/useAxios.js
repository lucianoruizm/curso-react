import axios from "axios";
import { useEffect, useState} from "react";

export function useAxios(arrayDeDependencias, url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState({
        isError: false,
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios(url)
            .then(res => setData(res.data))
            .catch(err => setError({
                isError: true,
                message: err.message,
            }))
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false)
                }, 1000)
            })
    }, arrayDeDependencias);

    return { data, error, isLoading};
}