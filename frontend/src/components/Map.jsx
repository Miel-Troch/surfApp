import { useRef, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import '../resources/map.css'

const Map = ({ coordinates }) => {
	const mapRef = useRef()
	const mapContainerRef = useRef()

	const [center, setCenter] = useState(coordinates)
	const [zoom, setZoom] = useState(10)

	useEffect(() => {
		mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN
		mapRef.current = new mapboxgl.Map({
			container: mapContainerRef.current,
			center: center,
			zoom: zoom
		})

		mapRef.current.on('move', () => {
			// get the current center coordinates and zoom level from the map
			const mapCenter = mapRef.current.getCenter()
			const mapZoom = mapRef.current.getZoom()

			// update state
			setCenter([mapCenter.lng, mapCenter.lat])
			setZoom(mapZoom)
		})

		return () => {
			mapRef.current.remove()
		}
	}, [])

	return <Box sx={{ width: '100%', height: '500px' }} ref={mapContainerRef} />
}

export default Map
