import { useEffect, useState } from "react"
import { fetchDataApi } from "../utils/api";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsloading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setData(null);
        setIsloading("yükleniyor.....");
        setError(null);

        fetchDataApi(url)
            .then((res) => {
                setData(res);
                setIsloading(false);
            }).catch((err) => {
                setError("Bir şeyler yanlış gitti!");
                setIsloading(false);
            })

    }, [url])
    return { data, isLoading, error }
}
export default useFetch;