import { Box, LinearProgress, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import { useQuery } from '@apollo/client'
import { READ_CONTINENTS } from '../resources/queries'
import Countrylist from '../components/CountryList'

const CustomTabPanel = (props) => {
	const { children, value, index, ...other } = props

	return (
		<div hidden={value !== index} id={`tabpanel-${index}`} {...other}>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	)
}

const SpotsPage = () => {
	const { loading: loadingContinents, data: continents } = useQuery(READ_CONTINENTS, {
		fetchPolicy: 'network-only',
		onError: (error) => console.log(error)
	})

	const [value, setValue] = useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	const StyledTabs = styled((props) => (
		<Tabs {...props} TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }} centered />
	))(({ theme }) => ({
		'& .MuiTabs-indicator': {
			display: 'flex',
			justifyContent: 'center',
			backgroundColor: 'transparent'
		},
		'& .MuiTabs-indicatorSpan': {
			maxWidth: 40,
			width: '100%',
			backgroundColor: theme.palette.secondary.main
		}
	}))

	const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
		textTransform: 'none',
		fontSize: theme.typography.pxToRem(15),
		marginRight: theme.spacing(1),
		color: theme.palette.text.primary,
		'&.Mui-selected': {
			color: theme.palette.secondary.main
		}
	}))

	if (loadingContinents) {
		return <LinearProgress />
	}

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider', pt: 2 }}>
				<StyledTabs value={value} onChange={handleChange}>
					{continents.readContinents.map((continent) => (
						<StyledTab key={continent.id} label={continent.name} />
					))}
				</StyledTabs>
			</Box>
			{continents.readContinents.map((continent, index) => (
				<CustomTabPanel key={continent.id} index={index} value={value}>
					<Countrylist id={continent.id} />
				</CustomTabPanel>
			))}
		</Box>
	)
}

export default SpotsPage
