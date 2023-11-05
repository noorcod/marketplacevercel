
import nProgress from 'nprogress'
import ScreenLoader from '../../components/ScreenLoader'
// import React ,{useEffect}from 'react'

function Loading() {

// useEffect(() => {
//  nProgress.start()
//   return () => {
//     nProgress.done()
//   }
// }, [])

  return (
    <div style={{ width: '100%', height: '100vh' }} className='justify-content-center d-flex align-items-center'>       <ScreenLoader/>
    </div>
  )
}

export default Loading