import React from 'react'
import ScreenLoader from '../components/ScreenLoader'

function Loading() {
  return (
    <div style={{ width: '100%', height: '100vh' }} className='justify-content-center d-flex align-items-center'>       <ScreenLoader/>
    </div>
  )
}

export default Loading