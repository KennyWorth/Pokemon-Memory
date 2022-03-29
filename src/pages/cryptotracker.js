import React from 'react'

const CryptoTracker = () => {
  return (

    <div style={{
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '90vh'}}>
      <div className="w3-content w3-margin-top" style={{maxWidth:"1400px"}}>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <br/><br/><br/><br/>I created a gRPC-based caching service for cryptocurrency price data from CoinGecko.<br/>
        The application is Go-based and adds the benefit of reducing API calls for any further<br/>
        services which may be created. The caching is done via Redis-based AWS Elasticache.<br/>
        
      </div></div>
  )
}

export default CryptoTracker