import {useState, useEffect } from 'react'

export default function useFetch(url: string) {
  const [data, setData] = useState<object>({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const getData = async (url: string) => {
      try {
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        if (response.ok) {
          const json = await response.json();
          setData(json);
          setLoading(false);
        } else {
          throw error;
        }
      } catch (e:any) {
        setError(e);
        setLoading(false)
      }
    };
    getData(url);
  }, []);
  return { data, error, loading } ;
}