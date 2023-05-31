import { useState, useEffect } from 'react';
import IPSearch from './IPSearch/IPSearch'
import SearchResults from './SearchResults/SearchResults'

const App = () => {
    const [data, setData] = useState();
    const [ipAddress, setIpAddress] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const initialDataFetch = async() => {
      const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}`);
      return res.json();
    }
  
    useEffect(() => {
      initialDataFetch()
        .then(res => setData(res))
    }, [])

    const dataFetch = async() => {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=${ipAddress}`);
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
        </>
    )
}

export default App