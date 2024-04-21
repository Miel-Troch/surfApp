import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import SpotsPage from './pages/SpotsPage'
import MapPage from './pages/MapPage'
import NotFoundPage from './pages/NotFoundPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='spots' element={<SpotsPage />} />
					<Route path='map' element={<MapPage />} />
					<Route path='profile' element={<ProfilePage />} />
					<Route path='settings' element={<SettingsPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
