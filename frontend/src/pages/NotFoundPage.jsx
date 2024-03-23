/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
	const navigate = useNavigate()

	const handleNavigate = () => navigate('/')

	return (
		<Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={1}>
			<Typography variant='h5' fontWeight={500}>
				404 Page Not Found
			</Typography>
			<Typography gutterBottom>Sorry, we couldn't find what you were looking for.</Typography>
			<Button onClick={handleNavigate} variant='contained'>
				go home
			</Button>
		</Box>
	)
}
