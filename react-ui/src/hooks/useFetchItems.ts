import {Todo} from "../types/Todo";
import {useEffect, useState} from "react";

export default function useFetchItems(url: string) {
    const [data, setData] = useState<Todo[] | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false)

    useEffect( () => {
        const fetchItem = async () =>  {
            try {
                setLoading(true);
                const response = await fetch(`${url}`);
                const data = await response.json();
                setData(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error)
                }
            } finally {
                setLoading(false);
            }
        }
        fetchItem()
    }, [url])

    return {data: data, error: error, loading}
}