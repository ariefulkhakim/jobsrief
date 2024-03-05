import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key': 'ee97822c8cmshb0587b46bd93b03p14600cjsnc829403c0eff',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options)
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error)
            alert('Terjadi Kesalahan, Mohon Tunggu.')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
      fetchData();
    }, [])
    
    const refetchData = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetchData }
}

export default useFetch