'use client'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime:0
    },
  },
})
function ReactQueryProvider({children}:{children:React.ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}</QueryClientProvider>
  )
}

export default ReactQueryProvider