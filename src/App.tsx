import { useState, useEffect } from 'react';
import IPSearch from './IPSearch/IPSearch'
import SearchResults from './SearchResults/SearchResults'

const App = () => {
    const [ip, setIp] = useState();

    const initialDataFetch = async() => {
      const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}`);
      return res.json();
    }
  
    useEffect(() => {
      initialDataFetch()
        .then(res => setIp(res))
    }, [])
  
    // const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`

    return (
        <>
            <IPSearch data={ip} setIp={setIp} />
            <SearchResults data={ip} />
        </>
    )
}

export default App