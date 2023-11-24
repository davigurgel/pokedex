import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export default function BaseLayout() {
  return (
    <div className="bg-[#f3f3f3]">
      <Header />
      <Outlet />
    </div>
  )
}
