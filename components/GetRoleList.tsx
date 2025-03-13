"use client"

import React from 'react'
import { useState, useEffect } from 'react'

const GetRoleList = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://devocionando-api-production.up.railway.app/roles/', {method:'GET'});
            const data = await res.json();

            return data;
        }

        fetchData();
    }, []);



    return (
        <div>
            <h1>dados da api</h1>
            {data ? (
                <pre>{JSON.stringify(data, null, 2,)} </pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>

    )
}

export default GetRoleList