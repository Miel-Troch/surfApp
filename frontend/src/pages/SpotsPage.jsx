import { Box, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'
import { styled } from '@mui/material/styles'

const CustomTabPanel = (props) => {
	const { children, value, index, ...other } = props

	return (
		<div hidden={value !== index} id={`tabpanel-${index}`} {...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

const SpotsPage = () => {
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

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider', pt: 2 }}>
				<StyledTabs value={value} onChange={handleChange}>
					<StyledTab label='Africa' />
					<StyledTab label='Asia' />
					<StyledTab label='Europe' />
					<StyledTab label='North America' />
					<StyledTab label='South America' />
					<StyledTab label='Oceania' />
				</StyledTabs>
			</Box>
			<CustomTabPanel value={value} index={0}>
				Africa
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				Asia
			</CustomTabPanel>
			<CustomTabPanel value={value} index={2}>
				Europe
			</CustomTabPanel>
			<CustomTabPanel value={value} index={3}>
				North America
			</CustomTabPanel>
			<CustomTabPanel value={value} index={4}>
				South America
			</CustomTabPanel>
			<CustomTabPanel value={value} index={5}>
				Oceania
			</CustomTabPanel>
		</Box>
	)
}

export default SpotsPage
