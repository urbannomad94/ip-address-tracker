import { useEffect, useState } from 'react';
import IPSearchCSS from './IPSearch.module.css'

const IPSearch = ({setIpAddress, ipAddress, setSubmitted}) => {

  // useEffect(() => {
  //   setData(ipAddress)
  // }, [ipAddress])

  return (
    <div className={IPSearchCSS.container}>
        <h1>IP Address Tracker</h1>
        <div className={IPSearchCSS.searchBox}>
            <input
              type="text"
              value={ipAddress}
              onChange={e => {
                setIpAddress(e.target.value)
              }}
              placeholder='Search for any IP address or domain' />
            <button
            onClick={() => setSubmitted(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
            </button>
        </div>
        
    </div>
  )
}

export default IPSearch


