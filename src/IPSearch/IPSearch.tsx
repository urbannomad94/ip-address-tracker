import IPSearchCSS from './IPSearch.module.css'

const IPSearch = ({data, setIp}) => {
  return (
    <div className={IPSearchCSS.container}>
        <h1>IP Address Tracker</h1>
        <div className={IPSearchCSS.searchBox}>
            <input type="text" placeholder='Search for any IP address or domain' />
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
            </button>
        </div>
        
    </div>
  )
}

export default IPSearch


