import { lazy } from 'react'

const Routes = lazy(() => import('./routes/Routes'))

export const App = () => <Routes />
