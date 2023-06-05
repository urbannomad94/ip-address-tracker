import { useState, useEffect } from 'react';
import IPSearch from './IPSearch/IPSearch'
import SearchResults from './SearchResults/SearchResults'
import Map from './Map/Map'

const App = () => {
    const [data, setData] = useState();
    const [ipAddress, setIpAddress] = useState('');
    const [submitted, setSubmitted] = useState(false);
    // const [location, setLocation] = useState([null, null])

    const initialDataFetch = async() => {
      const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_GEO_API_KEY}`);
      const data = await res.json();
      return data;
    }
  
    useEffect(() => {
      initialDataFetch()
        .then(res => {
            setData(res)
            // setLocation([res.location.region, res.location.country])
            setIpAddress(res.ip)
        })
    }, [])

    const dataFetch = async() => {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_GEO_API_KEY}&ipAddress=${ipAddress}`);
        return res.json();
    }

    useEffect(() => {
        dataFetch()
          .then(res => setData(res))
        setSubmitted(false)
      }, [submitted])

    return (
        <>
            <IPSearch setIpAddress={setIpAddress} ipAddress={ipAddress} setSubmitted={setSubmitted} />
            {data ? <SearchResults data={data} /> : null}
            {data ? <Map data={data} /> : null}
        </>
    )
}

export default App