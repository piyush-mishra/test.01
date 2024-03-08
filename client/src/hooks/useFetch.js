import axios from "axios"
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const[data,setData] = useState(null);
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(false);

    useEffect(() => {
        const fetchData = async ()=>{
            try{
                setLoading(true);
                const res = await axios.get('https://fakestoreapi.com/products');
                setData(res.data);
            }catch(err){
                console.error(err);
                setError(true);
            }
            setLoading(false);
        }
        fetchData();
    },[url]);
    return {data,loading,error};
} 

export default useFetch;