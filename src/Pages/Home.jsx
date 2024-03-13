import React, { useState } from 'react'
import Add from './Add'
import { Link } from 'react-router-dom'
import View from './View'

function Home() {

  const [uploadCarResponse,setUploadCarResponse] = useState("")
    
  return (
    <>
    <div className='container mt-5 d-flex justify-content-between'>
        <Add setUploadCarResponse={setUploadCarResponse}/>
        <Link style={{textDecoration:'none'}} to={'/Watch'}><h3 style={{height:'40px'}}>Recently Viewed</h3></Link>
    </div>
    <div className="container-fluid mt-5 mb-5 row text-center">
        <h2 style={{height:'40px'}}><b>Cars For Sale</b></h2>
        <View uploadCarResponse={uploadCarResponse}/>
    </div>
    </>
  )
}

export default Home