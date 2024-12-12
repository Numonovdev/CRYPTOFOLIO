import React from 'react'
import Main from '../components/Main'
import Cryptocurrency from '../components/Cryptocurrency'

function Home() {
  return (
    <div className='w-full'>
        <Main/>
        <Cryptocurrency />
    </div>
  )
}

export default Home