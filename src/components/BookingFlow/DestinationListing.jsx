import React, { useEffect, useState } from 'react'
import HeroBanner from '../Misc/HeroBanner'
import TopItems from './TopItems'
import axios from 'axios'

const DestinationListing = () => {
  const [destinations, setDestinations] = useState([])
  useEffect(()=>{ 
    axios.get('http://localhost/ub_back/wp-json/wp/v2/destination')
    .then((res)=>{
      setDestinations(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div>
        <HeroBanner />
        <TopItems data={destinations} />    
    </div>
  )
}

export default DestinationListing