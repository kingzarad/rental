import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@chakra-ui/react'

export default function payment() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [gcashURL, setGcashURL] = useState('')
    useEffect(() => {
        setLoading(true);
        async function gcashApi() {
            await axios.post('/api/gcash').then((res) => {
                setLoading(false);

                const { checkouturl } = res.data.data;
                console.log(checkouturl);
                setGcashURL(checkouturl);
                setData(res.data);
                
            })
        }
        gcashApi();
    }, [])

    /* Checking if the data is loading. */
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div>
            <Link href={gcashURL}>PAY NOW</Link>
        </div>
    )
}
