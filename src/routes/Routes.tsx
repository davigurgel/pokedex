import { Suspense, lazy } from 'react'
import { Route, Routes as RoutesApp } from 'react-router-dom'

import { ROUTES } from '../constants/routes'
import Loading from '../components/Loading'

const BaseLayout = lazy(() => import('../layout/BaseLayout'))
const Home = lazy(() => import('../pages/Home'))
const Bookmarks = lazy(() => import('../pages/Bookmarks'))
const Pokemon = lazy(() => import('../pages/Pokemon'))
const NotFound = lazy(() => import('../pages/NotFound'))

const Routes = () => (
  <RoutesApp>
    <Route
      path={ROUTES.home}
      element={
        <Suspense fallback={<Loading />}>
          <BaseLayout />
        </Suspense>
      }
    >
      <Route
        path={ROUTES.home}
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.bookmarks}
        element={
          <Suspense fallback={<Loading />}>
            <Bookmarks />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.pokemon}
        element={
          <Suspense fallback={<Loading />}>
            <Pokemon />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  </RoutesApp>
)

export default Routes
