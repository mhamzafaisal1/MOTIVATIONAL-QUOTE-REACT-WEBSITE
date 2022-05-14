import { useState, useEffect } from "react";
import axios from "axios";

const useResources = ({ clicked }) => {
    const [resources, setResources] = useState('')

    const fetchResources = async () => {
        const response = await axios.get("https://api.adviceslip.com/advice")
        const { advice } = response.data.slip
        setResources(advice);
    }

    useEffect(() => {
        fetchResources()
    }, [clicked])
    console.log(clicked);

    return resources;
}

export default useResources