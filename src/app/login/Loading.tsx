
import nProgress from 'nprogress'
import Loader from '../../components/Loader'
// import React ,{useEffect}from 'react'

function Loading() {

// useEffect(() => {
//  nProgress.start()
//   return () => {
//     nProgress.done()
//   }
// }, [])

  return (
    <div>
  <Loader/>
    </div>
  )
}

export default Loading