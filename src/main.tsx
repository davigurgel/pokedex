import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'

import GlobalProvider from './contexts/GlobalProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

const RETRY_ERROR_FETCH = 0

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: RETRY_ERROR_FETCH,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: RETRY_ERROR_FETCH,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
