import SearchResultsCSS from './SearchResults.module.css'

const SearchResults = ({data}) => {
  return (
    <div className={SearchResultsCSS.container}>
        <div className={SearchResultsCSS.info}>
            <h2>IP ADDRESS</h2>
            <h3>{data.ip}</h3>
        </div>
        <div className={SearchResultsCSS.info}>
            <h2>LOCATION</h2>
            <h3>{data.location.city}, {data.location.state ? data.location.state : data.location.country} {data.location.postalCode ? data.location.postalCode : ''}</h3>
        </div>
        <div className={SearchResultsCSS.info}>
            <h2>TIMEZONE</h2>
            <h3>{data.location.timezone}</h3>
        </div>
        <div className={SearchResultsCSS.info}>
            <h2>ISP</h2>
            <h3>{data.isp}</h3>
        </div>
    </div>
  )
}

export default SearchResults
