'use client'
import {usePathname, useSearchParams} from 'next/navigation'
import nProgress from 'nprogress'
import {useEffect} from 'react'
export function useNavigationEvent() {
   const pathname = usePathname()
  const searchParams:string|undefined|null|any = useSearchParams()
   useEffect(() => {
   //  nProgress.start()
      const url = pathname + searchParams.toString()
      console.log("-------runs everytime",url)
      // nProgress.done()
      // sendSomewhere(url)
   }, [pathname, searchParams])
}