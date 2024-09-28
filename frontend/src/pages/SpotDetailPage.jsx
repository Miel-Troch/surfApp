import { useParams } from 'react-router-dom'
import { Box, LinearProgress, Typography } from '@mui/material'
import { useQuery } from '@apollo/client'
import { READ_SPOT } from '../resources/queries'
import Map from '../components/Map'

const SpotDetailPage = () => {
	const { id } = useParams()

	const { loading: loadingSpot, data: spot } = useQuery(READ_SPOT, {
		skip: !id,
		variables: {
			id: Number(id)
		},
		fetchPolicy: 'network-only',
		onError: (error) => console.error(error)
	})

	if (loadingSpot) {
		return <LinearProgress />
	}

	return (
		<Box sx={{ width: '100%' }}>
			<Typography>{spot.readSpot.name}</Typography>
			<Typography>{spot.readSpot.type}</Typography>
			<Typography>{spot.readSpot.direction}</Typography>
			<Typography>{spot.readSpot.bottom}</Typography>
			<Typography>{spot.readSpot.difficulty}</Typography>
			<Typography>{spot.readSpot.quality_rating}</Typography>
			<Map coordinates={[spot.readSpot.long, spot.readSpot.lat]} />
		</Box>
	)
}

export default SpotDetailPage
