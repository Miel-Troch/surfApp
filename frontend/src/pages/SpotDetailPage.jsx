import { useParams } from 'react-router-dom'
import { Box, LinearProgress, Rating, Typography } from '@mui/material'
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
		<Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
			<Box sx={{ width: '40%', m: 2 }}>
				<Typography variant='h3'>{spot.readSpot.name}</Typography>
				<Typography variant='h6'>Type</Typography>
				<Typography>{spot.readSpot.type}</Typography>
				<Typography variant='h6'>Direction</Typography>
				<Typography>{spot.readSpot.direction}</Typography>
				<Typography variant='h6'>Sea Floor</Typography>
				<Typography>{spot.readSpot.bottom}</Typography>
				<Typography variant='h6'>Difficulty</Typography>
				<Typography>{spot.readSpot.difficulty}</Typography>
				<Typography variant='h6'>Quality</Typography>
				<Rating value={spot.readSpot.quality_rating} readOnly />
			</Box>
			<Box sx={{ flexGrow: 1 }}>
				<Map coordinates={[spot.readSpot.long, spot.readSpot.lat]} />
			</Box>
		</Box>
	)
}

export default SpotDetailPage
